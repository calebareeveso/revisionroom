import "../globals.css";
// components
import Nav from "../components/landing/nav";
// auth context
import { AuthContextProvider } from "../context/authContext";

export const metadata = {
  title: "Sign Up - Revision Room",
  description: "Sign up for Revision Room to students from all over the world",
};

export default function FeedLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondaryBg">
        <AuthContextProvider>
          <Nav />
          <main className="max-w-7xl mx-auto">
            <div className="container mx-auto">{children}</div>
          </main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
