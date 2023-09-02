import { v4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { role, roomId } = await request.json();

    const response = await fetch(`${process.env.TOKEN_ENDPOINT}api/token`, {
      method: "POST",
      body: JSON.stringify({
        user_id: v4(),
        // room_id: process.env.ROOM_ID,
        room_id: roomId,
        role,
      }),
    });

    const { token } = await response.json();
    return NextResponse.json({ token });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
