import OneCard from "@/app/components/serviceCard/oneCard";
import {dictionary} from "@/content";
import {priceDictionary} from "@/content";

export default function ServicesCards({ params }: { params: { lang: string } }) {

    const t = dictionary[params.lang].info_page.services;

    return (
        <>
            <div>
                <h1 className="text-center font-bold text-4xl tracking-tight uppercase">{t.title}</h1>
            </div>
            <div className="grid grid-cols-1 justify-items-stretch md:grid-cols-2 2xl:grid-cols-4 p-10 gap-10">
                {t.services.map(card => (
                    <OneCard key={card.id} details={card} currency={priceDictionary[params.lang].currency} price={priceDictionary[params.lang].price[card.id - 1]}/>
                ))}
            </div>
        </>
    )


}