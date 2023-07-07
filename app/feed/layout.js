import "../globals.css";
// components
import Nav from "../components/landing/nav";
export const metadata = {
  title: "Feed - Revision Room",
  description: "Revise with students from all over the world",
};

export default function FeedLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondaryBg">
        <Nav />
        <main className="max-w-7xl mx-auto">
          <div className="container mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
