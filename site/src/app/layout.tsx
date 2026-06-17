import "./globals.css";

// ルートレイアウトはパススルー。<html>/<body> と metadata は app/[locale]/layout.tsx が一元管理する
// （ここで html/body を出すと [locale] 側と二重になり hydration mismatch を起こすため）
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
