import Link from "next/link";
import InstagramLogo from "@/app/components/icons/instagramLogo";
import ThemeChangeButton from "@/app/components/icons/themeChangeButton";
import {dictionary} from "@/content";
import LanguageChanger from "@/app/components/languageChanger/languageChanger";

export default function Navbar({ locale } : { locale: string }) {

    const t = dictionary[locale].navbar
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost text-2xl sm:text-3xl">{t.name}</Link>
            </div>
            <div className="navbar-center md:hidden">
                <ThemeChangeButton/>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow menu-horizontal bg-base-100 rounded-box px-1">
                        <div role="button" tabIndex={0}>
                            <li><Link href="/" replace>{t.home}</Link></li>
                        </div>
                        <div role="button" tabIndex={0}>
                            <li><Link href="/info" replace>{t.info}</Link></li>
                        </div>
                        <div role="button" tabIndex={0}>
                            <li><Link href="/gallery" replace>{t.gallery}</Link></li>
                        </div>
                        <div role="button" tabIndex={0}>
                            <li><Link href="/contact" replace>{t.contact}</Link></li>
                        </div>
                        <div role="button" tabIndex={0}>
                            <li><Link target="_blank" href={t.instagram}><InstagramLogo/></Link></li>
                        </div>
                        <LanguageChanger currentLang={locale}/>
                    </ul>
                </div>
                <ul className="menu menu-horizontal menu-sm md:menu-md lg:menu-lg navbar-center hidden md:flex sm:items-center">
                    <li><Link href="/" replace>{t.home}</Link></li>
                    <li><Link href="/info" replace>{t.info}</Link></li>
                    <li><Link href="/gallery" replace>{t.gallery}</Link></li>
                    <li><Link href="/contact" replace>{t.contact}</Link></li>
                    <li><Link target="_blank" href={t.instagram}><InstagramLogo/></Link></li>
                    <ThemeChangeButton />
                    <LanguageChanger currentLang={locale}/>
                </ul>
            </div>
        </div>
    )
}