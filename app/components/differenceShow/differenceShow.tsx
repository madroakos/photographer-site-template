import Image from "next/image";
import differenceRaw from '@/public/difference_raw.jpg';
import differenceEdited from '@/public/difference_edited.jpg';
import {dictionary} from "@/content";
export default function DifferenceShow({ params }: { params: { lang: string } }) {

    const t = dictionary[params.lang]?.home_page.difference_show;
    return (
        <div className="flex flex-col justify-center my-12">
            <h2 className="font-bold text-center">{t?.title}</h2>
            <label className="swap">
                <input type="checkbox"/>
                <Image alt={t?.image_alt_raw} className="swap-off" src={differenceRaw}/>
                <Image alt={t?.image_alt_edited} className="swap-on" src={differenceEdited}/>
            </label>
            <p className="text-center">{t?.description}</p>
        </div>
    )
}