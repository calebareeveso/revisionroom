import "../../globals.css";
// components
import Nav from "../../components/landing/nav";
// firesore
import getRoomData from "../../../utils/firebase/firestore/get/roomData";
export const metadata = {
  title: "ROOMNAME - Revision Room",
  description: "ROOM DESCRIPTION",
};
// router events clientRouteChangeProvider
import ClientRouteChangeProvider from "../../../utils/clientRouteChangeProvider";

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
