import Image from "next/image";
import {dictionary} from "@/content";

export default function SponsorSection({ params }: { params: { lang: string } }) {

    const t = dictionary[params.lang].home_page.sponsor;
    return(
        <div className="flex justiy-center m-6">
            <div className="grid grid-cols-3 items-center justify-items-center gap-6 w-full">
                {t.map((item) => (
                        <Image key={item.id} src={item.img} alt={item.alt}/>
                ))}
            </div>
        </div>
    )
}