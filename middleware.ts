import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
let locales = ["hu", "en"];
export let defaultLocale = "hu";

export function getLocale(request: Request): string {
    const headers = new Headers(request.headers);
    const acceptLanguage = headers.get("accept-language")
    if (acceptLanguage) {
        headers.set('accept-language', acceptLanguage.replaceAll('_', '-'))
    }

    const headersObject = Object.fromEntries(headers.entries());
    const languages = new Negotiator({ headers: headersObject }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const cookieLang = request.cookies.get('lang')?.value ?? "";
    let locale ;
    if (cookieLang) {
        locales.includes(cookieLang) ? locale = cookieLang : locale = defaultLocale;
    } else {
        locale = getLocale(request) ?? defaultLocale;
    }

    const pathname = request.nextUrl.pathname
    const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl)
    const response = NextResponse.rewrite(newUrl)
    response.headers.append('Set-Cookie', `lang=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`);
    return response
}

export const config = {
    matcher: [
        '/((?!_next|api|facivon.ico).*)',
    ]
}