import WelcomeInfo from "@/app/components/welcomeInfo/welcomeInfo";
import DifferenceShow from "@/app/components/differenceShow/differenceShow";
import UserReviews from "@/app/components/userReviews/userReviews";
import Stats from "@/app/components/stats/stats";
import SponsorSection from "@/app/components/sponsorSection/sponsorSection";

export default function Home({ params }: { params: { lang: string } }) {

  return (
    <>
        <WelcomeInfo params={params}/>
        <DifferenceShow params={params}/>
        <UserReviews params={params}/>
        <SponsorSection params={params}/>
        <Stats params={params}/>
    </>
  );
}
