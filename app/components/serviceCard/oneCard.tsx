import {StaticImageData} from "next/image";
import Image from 'next/image';

interface card {
    id: number,
    title: string,
    price: number,
    description: string[],
    img: StaticImageData,
}

export default function OneCard( {details, currency, price}: {details: card, currency: string, price: string}) {

    const priceString = price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const priceFinal = currency === "Ft" ? `${priceString}Ft-tól` : `From ${priceString}${currency}`;

    return (
        <div className="card card-side bg-neutral shadow-xl max-h-48">
            <figure className="min-w-32 max-w-32 object-cover">
                <Image src={details.img} alt={details.title} />
            </figure>
            <div className="card-body p-2 flex flex-col justify-center">

                <h2 className="card-title text-base uppercase">{details.title}</h2>
                <ul className="list-disc ml-4">
                    {details.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <span className="badge font-bold text-secondary">
                    {priceFinal}
                </span>
            </div>
        </div>
    )
}