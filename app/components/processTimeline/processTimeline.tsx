import Process from "@/app/components/processTimeline/process";
import {dictionary} from "@/content";

export default function ProcessTimeline({ params }: { params: { lang: string } }) {

    const t = dictionary[params.lang].info_page.processes;
    return (
        <>
        <h1 className="text-center font-bold text-4xl tracking-tight m-5 uppercase">{t.title}</h1>
        <ul className="timeline timeline-snap-icon max-sm:timeline-compact timeline-vertical mb-12">
            {t.processes.processes.map(process => (
                <Process key={process.id} details={process} step={t.processes.steps}/>
            ))}
        </ul>
        </>
    )
}