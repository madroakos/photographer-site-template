interface detailType {
    id: number,
    title: string,
    description: string,
}

interface QuestionProps {
    details: detailType;
}

export default function Question({ details} : QuestionProps) {

    return (
        <div key={details.id} className="flex justify-center m-5">
            <div className="collapse collapse-arrow border-2 w-11/12 sm:w-9/12  md:w-8/12 lg:w-9/12">
                <input type="checkbox" className="peer"/>
                <div className="collapse-title bg-neutral bg-opacity-20">
                    <h1 className="font-bold">{details.title}</h1>
                </div>
                <div
                    className="collapse-content bg-neutral bg-opacity-20">
                    <p>{details.description}</p>
                </div>
            </div>
        </div>
    )
}