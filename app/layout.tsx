import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title:
    "Nwakaego Uchenna Oputa | Virtual Assistant & Customer Service Professional",
  description:
    "Professional portfolio of Nwakaego Uchenna Oputa – Customer Service & Administrative Support Professional. Available for remote and hybrid opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&p)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
