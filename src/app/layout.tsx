import { Bubblegum_Sans} from 'next/font/google';
import "styles/global.css";

const bubblegum = Bubblegum_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bubblegum',
  preload: true,
  fallback: ['cursive'],
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bubblegum.variable}>
      <body>{children}</body>
    </html>
  );
}
