import "./app.css";

import Link from "next/link";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>
        <header className="bg-amber-100">
          <nav className="mx-auto flex w-fit gap-8 py-10">
            {[
              { href: "/", label: "入力画面" },
              { href: "/success", label: "送信後画面" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="py-2 px-4 hover:bg-amber-200">
                {label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="bg-pink-100">
          <div className="mx-auto w-lg py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
