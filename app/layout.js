import "./globals.css";

// auth context
import { AuthContextProvider } from "./context/authContext";
export const metadata = {
  title: "Revision Room",
  description: "Revise with students from across England",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
