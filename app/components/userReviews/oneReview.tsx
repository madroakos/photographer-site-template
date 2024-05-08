import QuoteSign from "@/app/components/userReviews/QuoteSign";

interface review {
    id: number,
    description: string,
    name: string,
}

interface props {
    details: review
}

export default function OneReview({details}: props) {
    return (
        <div className="card h-fit w-10/12 sm:w-5/12 md:w-5/12 bg-base-100 shadow-xl">
            <div className="pt-3 pl-3">
                <QuoteSign/>
            </div>
            <div className="px-5">
                <p>{details.description}</p>
            </div>
            <div className=" font-bold uppercase m-6">
                <p>{details.name}</p>
            </div>
        </div>
    )
}