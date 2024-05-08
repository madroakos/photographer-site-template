'use client';
export default function LanguageChanger({ currentLang } : { currentLang: string }) {
    const changeLanguage = (lang: string) => {
        document.cookie = `lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
        location.reload();
    }

    return (
        <select className="select select-ghost w-fit" value={currentLang} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="hu">HU</option>
            <option value="en">EN</option>
        </select>
    )
}