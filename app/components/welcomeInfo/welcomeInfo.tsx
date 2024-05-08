import Image from "next/image";
import profPortrait from '@/public/profile_portrait.jpg';
import SendIcon from "@/app/components/welcomeInfo/sendIcon";
import Link from "next/link";
import {dictionary} from "@/content";

export default function WelcomeInfo({ params }: { params: { lang: string } }) {
    const t = dictionary[params.lang]?.home_page.welcome_info;
    return (
        <div className="hero">
            <div className="hero-content flex-col md:flex-row">
                <div className="flex justify-center">
                <Image src={profPortrait} alt={t?.image_alt} priority={true} className="w-10/12 sm:w-8/12 md:w-11/12 rounded-lg shadow-2xl"/>
                </div>
                <div>
                    <h1 className="text-4xl font-bold uppercase">{t?.title}</h1>
                    <p className="py-6">{t?.description}</p>
                    <Link href="/contact">
                        <button className="btn btn-secondary text-white"><SendIcon/>{t?.contact_button}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}