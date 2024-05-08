import Image, {StaticImageData} from "next/image";

interface process {
    id: number,
    title: string,
    description: string,
    img: StaticImageData,
}

interface ServiceProps {
    details: process;
}


export default function Process({ details, step } : { details: process, step: string }) {
    const imageClassName = details.id % 2 === 0 ? "flex justify-center w-full sm:w-fit timeline-start sm:timeline-start" :
                                                                             "flex justify-center w-full sm:w-fit timeline-start sm:timeline-end";
    const infoClassName = details.id % 2 === 0 ? "timeline-end sm:timeline-end md:text-end w-full" : "timeline-end sm:timeline-start text-end md:text-start";

    return (
        <li className="w-screen md:w-8/12 xl:w-7/12 m-auto px-6">
            <div className={imageClassName}>
                <Image src={details.img} alt={process.title} className="mask mask-squircle w-52 sm:min-w-72 sm:w-10/12"/>
            </div>
            <div className={infoClassName}>
                <time className="font-bold">{details.id}. {step}</time>
                <div className="text-lg font-black">{details.title}</div>
                <p>{details.description}</p>
            </div>
            <hr className="hidden sm:block"/>
        </li>
    )
}