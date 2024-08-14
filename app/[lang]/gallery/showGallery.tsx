import Image from "next/image";
import img1 from '@/public/gallery/1.jpg';
import img2 from '@/public/gallery/2.jpg';
import img3 from '@/public/gallery/3.jpg';
import img4 from '@/public/gallery/4.jpg';
import img5 from '@/public/gallery/5.jpg';
import img6 from '@/public/gallery/6.jpg';
import img7 from '@/public/gallery/7.jpg';
import img8 from '@/public/gallery/8.jpg';
import img9 from '@/public/gallery/9.jpg';
import img10 from '@/public/gallery/10.jpg';
import img11 from '@/public/gallery/11.jpg';
import img12 from '@/public/gallery/12.jpg';
import img13 from '@/public/gallery/13.jpg';
import img14 from '@/public/gallery/14.jpg';
import img15 from '@/public/gallery/15.jpg';
import img16 from '@/public/gallery/16.jpg';
import img17 from '@/public/gallery/17.jpg';
import img18 from '@/public/gallery/18.jpg';
import img19 from '@/public/gallery/19.jpg';
import img20 from '@/public/gallery/20.jpg';

const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

export default function ShowGallery() {

    return (
        <div className="m-5 columns-2 sm:columns-3 md:columns-4 lg:columns-5" id="imageContainer">
             {galleryImages.map(file => (
                <div key={file.src} className="relative mb-5">
                    <Image src={file} alt={file.src} width={500} height={500} loading={"eager"}
                           className="rounded-lg animate-fade-in" />
                </div>
            ))}
        </div>
    )
}