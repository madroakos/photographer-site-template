import Question from "@/app/components/faqSection/question";
import {dictionary} from "@/content";

export default function FaqSection({ params }: { params: { lang: string } }) {

    const t = dictionary[params.lang].info_page.faqs;
    return (
        <>
            <h1 className="text-center font-bold text-4xl tracking-tight m-5">{t.title}</h1>
            {t.faqs.map((detail) => (
            <Question key={detail.id} details={detail}/>
            ))}
        </>
    )
}