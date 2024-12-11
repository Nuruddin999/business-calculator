import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Калькулятор процентов, долей",
  description: "Калькулятор долей в процентах. Добавляйте участниокв и их суммы и увидите всех участников, сумму каждого, общую сумму всех, долю в процентах от общей суммы каждого участника",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
