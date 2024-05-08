import {dictionary} from "@/content";

export default function Stats({ params }: { params: { lang: string } }) {

    const t = dictionary[params.lang].home_page.stats;
    return (
        <div className="stats shadow m-auto max-w-screen sm:max-w-5xl flex flex-col sm:flex-row">

            {t.map(stat => (
                <div key={stat.title} className="stat place-items-center">
                    <div className="stat-value text-3xl">{stat.value}</div>
                    <div className="stat-title uppercase">{stat.title}</div>
                </div>
            ))}
        </div>
    )
}