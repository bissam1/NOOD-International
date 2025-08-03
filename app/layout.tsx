import { Inter } from "@next/font/google";
import "./globals.css";
import { CustomCursor } from "@/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NOOD International Properties",
  description: "Explore premium properties worldwide with NOOD International.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
