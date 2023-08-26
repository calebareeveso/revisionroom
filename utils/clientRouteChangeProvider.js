"use client";
// nextjs13 router events
import { RouteChangeProvider } from "nextjs13-router-events";
const clientRouteChangeProvider = ({ children }) => {
  return (
    <div>
      <RouteChangeProvider>{children}</RouteChangeProvider>
    </div>
  );
};

export default clientRouteChangeProvider;
