import "../../globals.css";
// components
import Nav from "@/app/components/landing/nav";
export const metadata = {
  title: "ROOMNAME - Revision Room",
  description: "ROOM DESCRIPTION",
};

export default function RoomLayout({ children }) {
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
