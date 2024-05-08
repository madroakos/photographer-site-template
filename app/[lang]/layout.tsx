import type {Metadata, Viewport} from "next";
import "./globals.css";
import Navbar from "@/app/[lang]/navbar";
import {getMetadata} from "@/app/[lang]/localizeMetadata";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: "default title",
    description: "default description",
};

export const viewport: Viewport = {
    initialScale: 1,
    width: "device-width",
    maximumScale: 1,
};

interface RootLayoutProps {
    children: React.ReactNode
    params: {
        lang: string
    }
}

export default function RootLayout({ children, params: { lang } }: RootLayoutProps) {

    metadata.title = getMetadata({ lang }).title;
    metadata.description = getMetadata({ lang }).description;
    return (
        <html lang={lang}>
        <SpeedInsights />
        <body>
        <Navbar locale={lang} />
        <main>{children}</main>
        </body>
        </html>

    );
}