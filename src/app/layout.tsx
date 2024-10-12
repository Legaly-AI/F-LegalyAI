import './globals.css'
import type { Metadata } from 'next'
import AmitIcon from '@/assets/le.ico'

export const metadata: Metadata = {
  title: "Legaly AI",
  description: "Created with the help of Frontend Tribe",
  icons: {
    icon: AmitIcon.src, // Use the AmitIcon as the favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={AmitIcon.src} sizes="any" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  )
}