import OneReview from "@/app/components/userReviews/oneReview";
import {dictionary} from "@/content";

export default function UserReviews({ params }: { params: { lang: string } }) {

    const t = dictionary[params.lang]?.home_page.user_reviews;
    return (
        <div className="">
            <div>
                <h3 className="text-center font-light text-sm tracking-tight uppercase">{t?.description}</h3>
                <h1 className="text-center font-bold text-2xl tracking-tight uppercase">{t?.title}</h1>
            </div>
            <div className="flex flex-wrap justify-center md:grid-cols-2 2xl:grid-cols-4 p-10 gap-10">
                {t?.reviews.map(review => (
                    <OneReview key={review.id} details={review}/>
                ))}
            </div>
        </div>
    )


}