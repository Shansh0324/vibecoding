
import  {Footer}  from "@/features/home/components/footer";
import  {Header}  from "@/features/home/components/header";
import localFont from "next/font/local";
import type { Metadata } from "next";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
    title: {
        template: "CodeVed  - Editor ",
        default: "CodeVed - Code Editor For VibeCoders ",
    },
};

const geist = localFont({
    src: [{ path: "../../public/fonts/GeistVF.woff", weight: "100 900", style: "normal" }],
    variable: "--font-geist",
    preload: true,
    display: "swap",
});
const geistMono = localFont({
    src: [{ path: "../../public/fonts/GeistMonoVF.woff", weight: "100 900", style: "normal" }],
    variable: "--font-geist-mono",
    preload: true,
    display: "swap",
});

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${geist.variable} ${geistMono.variable}`}>
            <Header />
      
            <main className="z-20 relative w-full pt-0 md:pt-0  ">
          
                {children}
            </main>
            <Footer />
        </div>
    );
}