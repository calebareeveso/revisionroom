import { NextRequest, NextResponse } from "next/server";

import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import uuid4 from "uuid4";

const MAX_AGE = 60 * 60 * 24 * 30; // days;

export async function POST(request) {
  const { roomId } = await request.json();
  const headers = request.headers;
  try {
    const app_access_key = process.env.APP_ACCESS_KEY;
    const app_secret = process.env.APP_SECRET;
    const payload = {
      access_key: app_access_key,
      type: "management",
      version: 2,
      iat: Math.floor(Date.now() / 1000),
      nbf: Math.floor(Date.now() / 1000),
    };

    const token = sign(payload, app_secret, {
      algorithm: "HS256",
      expiresIn: "24h",
      jwtid: uuid4(),
    });

    const seralized = serialize("OurSiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    const roomResponse = await fetch(
      `https://api.100ms.live/v2/rooms/${roomId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enabled: false,
        }),
      }
    );

    let response;
    if (roomResponse.ok) {
      const { name, enabled } = await roomResponse.json();
      response = {
        name: name,
        enabled: enabled,
      };
    } else {
      response = {
        message: "Authenticated! BUT Cannot create Room",
        managementToken: token,
      };
    }

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Set-Cookie": seralized },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate management token" },
      { status: 400 }
    );
  }
}
