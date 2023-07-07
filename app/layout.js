import './globals.css'


export const metadata = {
  title: 'Revision Room',
  description: 'Revise with students from all over the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
