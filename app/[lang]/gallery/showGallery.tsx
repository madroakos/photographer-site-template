import Image from "next/image";
import fs from "node:fs";
export default function ShowGallery() {
    let files: string[] = fs.readdirSync("./public/gallery");

    return (
        <div className="m-5 columns-2 sm:columns-3 md:columns-4 lg:columns-5" id="imageContainer">
             {files.map(file => (
                <div key={file} className="relative mb-5">
                    <Image src={`/gallery/${file}`} alt={file} width={500} height={500} loading={"eager"}
                           className="rounded-lg animate-fade-in" />
                </div>
            ))}
        </div>
    )
}