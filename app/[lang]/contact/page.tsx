import FacebookLogo32 from "@/app/components/icons/facebookLogo32";
import Link from "next/link";
import InstagramLogo32 from "@/app/components/icons/instagramLogo32";
import {dictionary} from "@/content";

export default function Contact({params}: { params: { lang: string } }) {
    const t = dictionary[params.lang].contact_page;
    return (
        <div className="flex flex-col md:items-center">
            <div className="flex flex-col items-center my-6">
                <h1 className="uppercase text-4xl font-bold">{t.title}</h1>
                <p className="uppercase text-sm">{t.description}</p>
            </div>
            <div className="m-6 flex flex-col md:flex-row justify-center">
                <div className="flex flex-col gap-5 mb-12 md:mr-12">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl mb-2">{t.email_label}</h1>
                        <p className="text-lg">{t.email_actual}</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl mb-2">{t.phone_label}</h1>
                        <p className="text-lg">{t.phone_actual}</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl mb-2">{t.social_media}</h1>
                        <div className="flex gap-5">
                            <Link href={t.facebook} target="_blank"><FacebookLogo32/></Link>
                            <Link href={t.instagram} target="_blank"><InstagramLogo32/></Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:mr-12 md:w-10/12">
                    <form className="flex flex-col items-center gap-5">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            {nameSVG}
                            <input type="text" className="grow" placeholder={t.form.name} required/>
                        </label>
                        <div className="flex flex-col sm:flex-row md:flex-col gap-5 justify-center w-full">
                            <label className="input input-bordered flex items-center gap-2 w-full sm:w-6/12 md:w-full">
                                {emailSVG}
                                <input type="text" className="grow" placeholder={t.email_label} required/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-full sm:w-6/12 md:w-full">
                                {phoneSVG}
                                <input type="text" className="grow" placeholder={t.phone_label}/>
                            </label>
                        </div>
                        <textarea className="textarea textarea-bordered w-full" placeholder={t.form.message}
                                  required></textarea>
                        <div className="form-control flex flex-row justify-center">
                            <label className="cursor-pointer label gap-2">
                                <input type="checkbox" className="checkbox checkbox-secondary" required/>
                                <span className="label-text">{t.form.checkbox}</span>
                            </label>
                        </div>
                        <button className="btn btn-secondary">{t.form.submit}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const phoneSVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-telephone" viewBox="0 0 16 16">
    <path
        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>;

const emailSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                      className="w-4 h-4 opacity-70">
    <path
        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
    <path
        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
</svg>;

const nameSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                     className="w-4 h-4 opacity-70">
    <path
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
</svg>;