import {Suspense} from "react";
import ShowGallery from "@/app/[lang]/gallery/showGallery";
import SkeletonGallery from "@/app/[lang]/gallery/skeletonGallery";

export default function Gallery() {
    return (
        <Suspense fallback={<SkeletonGallery/>}>
            <ShowGallery/>
        </Suspense>
    )
}