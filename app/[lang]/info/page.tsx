import ServicesCards from "@/app/components/serviceCard/servicesCards";
import ProcessTimeline from "@/app/components/processTimeline/processTimeline";
import FaqSection from "@/app/components/faqSection/faqSection";


export default function Info({ params }: { params: { lang: string } }) {
    return (
        <>
            <ServicesCards params={params}/>
            <ProcessTimeline params={params}/>
            <FaqSection params={params}/>
        </>
    )
}