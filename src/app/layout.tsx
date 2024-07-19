// src/app/layout.tsx
import "@/styles/globals.css";
import { FC } from "react";

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
