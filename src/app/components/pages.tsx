// app/components/pages.tsx
import { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const ComponentsLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/components/modal">Modal</Link>
          </li>
          <li>
            <Link href="/components/grid">Grid</Link>
          </li>
          <li>
            <Link href="/components/popup">Popup</Link>
          </li>
          <li>
            <Link href="/components/card">Card</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default ComponentsLayout;
