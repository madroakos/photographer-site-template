
export default function SkeletonGallery() {
    const files: number = 30;

    return (
        <div className="m-5 columns-2 sm:columns-3 md:columns-4 lg:columns-5">
            {Array.from({ length: files }).map((_, i) => (
                <div key={i} className="mb-5 skeleton w-62 h-96"/>
            ))}
        </div>
    )
}