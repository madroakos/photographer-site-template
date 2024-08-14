import {StaticImageData} from "next/image";

//Services images
import servicesPortraitImage  from "/public/prices-portrait.jpg";
import servicesCoupleImage  from "/public/prices-couple.jpg";
import servicesWeddingImage  from "/public/prices-wedding.jpg";
import servicesOtherImage  from "/public/prices-drone.jpg";

//Process images
import processContactImage from "/public/process-contact.jpg";
import processDetailsImage from "/public/process-details.jpg";
import processConditionsImage from "/public/process-circumstances.jpg";
import processDayImage from "/public/process-the-day.jpg";
import processSelectImage from "/public/process-photo-selection.jpg";
import processPostImage from "/public/process-post-production.jpg";
import processDeliveryImage from "/public/process-delivery.jpg";

//Sponsor images
import sponsor1 from "/public/sponsor/sponsor1.png";
import sponsor2 from "/public/sponsor/sponsor2.png";
import sponsor3 from "/public/sponsor/sponsor3.png";


const firstName = "John";
const lastName = "Doe";
const email = "hello@johndoe.hu";
const phone = "+123456789";
const facebook = "https://www.facebook.com/";
const instagram = "https://www.instagram.com/";

interface Metadata {
    title: string;
    description: string;
}
interface Review {
    id: number;
    description: string;
    name: string;
}
interface Stat {
    id: number;
    title: string;
    value: string;
}
interface Service {
    id: number,
    title: string,
    price: number
    description: string[],
    img: StaticImageData,
}
interface Process {
    id: number,
    title: string,
    description: string,
    img: StaticImageData,
}
interface Faq {
    id: number,
    title: string,
    description: string,
}
interface Sponsor {
    id: number,
    img: StaticImageData,
    alt: string,
}
interface DictionaryEntry {
    metadata: Metadata,
    navbar: {
        name: string,
        home: string,
        info: string,
        gallery: string,
        contact: string,
        instagram: string,
    }
    home_page: {
        welcome_info: {
            title: string,
            description: string
            image_alt: string
            contact_button: string
        },
        user_reviews: {
            title: string,
            description: string,
            reviews: Review[],
        },
        difference_show: {
            title: string,
            description: string
            image_alt_raw: string
            image_alt_edited: string
        },
        stats: Stat[],
        sponsor: Sponsor[],
    },
    info_page: {
        services: {
            title: string,
            services: Service[],
        },
        processes: {
            title: string,
            processes: {
                steps: string,
                processes: Process[],
            }
        }
        faqs: {
            title: string,
            faqs: Faq[],
        }
    },
    contact_page: {
        title: string,
        description: string,
        email_label: string,
        email_actual: string,
        phone_label: string,
        phone_actual: string,
        social_media: string,
        instagram: string,
        facebook: string,
        form: {
            name: string,
            message: string,
            checkbox: string,
            submit: string,
        }
    }
}
interface PriceDictionaryEntry {
    currency: string
    price: string[]
}

export const priceDictionary: Record<string, PriceDictionaryEntry> = {
    en: {
        currency: "€",
        price: [
            "65",
            "90",
            "520",
            "90"
        ]
    },
    hu: {
        currency: "Ft",
        price: [
            "25.000",
            "35.000",
            "200.000",
            "35.000"
        ]
    }
}

export const dictionary: Record<string, DictionaryEntry> = {
    en: {
        metadata: {
            title: firstName + " " + lastName,
            description: firstName + " " + lastName + "'s portfolio",
        },
        navbar: {
            name: firstName + " " + lastName,
            home: "Home",
            info: "Info",
            gallery: "Gallery",
            contact: "Contact",
            instagram: instagram,
        },
        home_page: {
            welcome_info: {
                title: "I am " + firstName + " " + lastName,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Ornare massa eget egestas purus viverra accumsan in. Molestie a iaculis at erat. Ultrices dui sapien eget mi proin sed libero enim. Sed velit dignissim sodales ut. Non consectetur a erat nam at.",
                image_alt: firstName + " " + lastName + " portrait",
                contact_button: "Contact"
            },
            user_reviews: {
                title: "What do they say about me?",
                description: "Customer Reviews",
                reviews: [
                    {
                        id: 1,
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Etiam tempor orci eu lobortis. In metus vulputate eu scelerisque felis. Nunc pulvinar sapien et ligula ullamcorper malesuada.",
                        name: "Customer 1"
                    },
                    {
                        id: 2,
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Eget est lorem ipsum dolor sit amet. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Sollicitudin nibh sit amet commodo nulla facilisi.",
                        name: "Customer 2"
                    },
                    {
                        id: 3,
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet. Diam maecenas ultricies mi eget mauris pharetra et. Sed blandit libero volutpat sed cras ornare arcu dui. Nibh tellus molestie nunc non blandit massa enim nec dui.",
                        name: "Customer 3"
                    },
                    {
                        id: 4,
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Suspendisse in est ante in nibh mauris cursus mattis. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Feugiat scelerisque varius morbi enim nunc.",
                        name: "Customer 4"
                    }],
            },
            difference_show: {
                title: "Experience what separates amateurs from the professionals.",
                description: "Click on the photo",
                image_alt_raw: "Original photo",
                image_alt_edited: "Retouched photo"
            },
            stats: [
                {
                    id: 1,
                    title: "Stat 1",
                    value: "420"
                },
                {
                    id: 2,
                    title: "Stat 2",
                    value: "9"
                },
                {
                    id: 3,
                    title: "Stat 3",
                    value: "32"
                }
            ],
            sponsor: [
                {
                    id: 1,
                    img: sponsor1,
                    alt: "Sponsor 1"
                },
                {
                    id: 2,
                    img: sponsor2,
                    alt: "Sponsor 2"
                },
                {
                    id: 3,
                    img: sponsor3,
                    alt: "Sponsor 3"
                }]
        },
        info_page: {
            services: {
                title: "Services",
                services: [
                    {
                        id: 1,
                        title: "Portrait photography",
                        price: 25000,
                        description: ["detail", "detail"],
                        img: servicesPortraitImage
                    },
                    {
                        id: 2,
                        title: "Couple photography",
                        price: 35000,
                        description: ["detail", "detail"],
                        img: servicesCoupleImage
                    },
                    {
                        id: 3,
                        title: "Wedding photography",
                        price: 200000,
                        description: ["detail", "detail"],
                        img: servicesWeddingImage
                    },
                    {
                        id: 4,
                        title: "Other services",
                        price: 35000,
                        description: ["detail", "detail", "detail"],
                        img: servicesOtherImage
                    }
                ]
            },
            processes: {
                title: "Photography process",
                processes: {
                    steps: "step",
                    processes: [
                    {
                        id: 1,
                        title: "Contact",
                        description: "congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend",
                        img: processContactImage
                    },
                    {
                        id: 2,
                        title: "Meeting",
                        description: "tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum",
                        img: processDetailsImage
                    },
                    {
                        id: 3,
                        title: "Creating conditions",
                        description: "mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit",
                        img: processConditionsImage
                    },
                    {
                        id: 4,
                        title: "Day of the photo shoot",
                        description: "dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin",
                        img: processDayImage
                    },
                    {
                        id: 5,
                        title: "Selecting photos",
                        description: "pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo",
                        img: processSelectImage
                    },
                    {
                        id: 6,
                        title: "Post-processing",
                        description: "pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo",
                        img: processPostImage
                    },
                    {
                        id: 7,
                        title: "Delivery of the finished photos",
                        description: "nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum",
                        img: processDeliveryImage
                    }
                ],}
            },
            faqs: {
                title: "Frequently Asked Questions",
                faqs: [
                    {
                        id: 1,
                        title: "Question 1",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Neque ornare aenean euismod elementum nisi quis eleifend quam."
                    },
                    {
                        id: 2,
                        title: "Question 2",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    },
                    {
                        id: 3,
                        title: "Question 3",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Urna cursus eget nunc scelerisque viverra mauris. Nec ullamcorper sit amet risus nullam eget felis."
                    },
                    {
                        id: 4,
                        title: "Question 4",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh. Sollicitudin ac orci phasellus egestas tellus rutrum."
                    },
                    {
                        id: 5,
                        title: "Question 5",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo laoreet sit."
                    },
                    {
                        id: 6,
                        title: "Question 6",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id."
                    }
                ]
            }
        },
        contact_page: {
            title: "CONTACT",
            description: "Feel free to contact me.",
            email_label: "Email",
            email_actual: email,
            phone_label: "Phone",
            phone_actual: phone,
            social_media: "Social Media",
            instagram: instagram,
            facebook: facebook,
            form: {
                name: "Name",
                message: "Message",
                checkbox: "I accept the privacy policy.",
                submit: "Submit",
            }
        }
    },
    hu: {
        metadata: {
            title: lastName + " " + firstName,
            description: lastName + " " + firstName + " portfóliója",
        },
        navbar: {
            name: lastName + " " + firstName,
            home: "Főoldal",
            info: "Információk",
            gallery: "Galéria",
            contact: "Kapcsolat",
            instagram: instagram,
        },
        home_page: {
            welcome_info: {
                title: lastName + " " + firstName + " vagyok",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Ornare massa eget egestas purus viverra accumsan in. Molestie a iaculis at erat. Ultrices dui sapien eget mi proin sed libero enim. Sed velit dignissim sodales ut. Non consectetur a erat nam at.",
                image_alt: lastName + " " + firstName + " portré",
                contact_button: "Kapcsolat"
            },
            user_reviews: {
                title: "Mit mondanak rólam?",
                description: "Ügyfeleim véleményei",
                reviews: [
                    {
                        id: 1,
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Etiam tempor orci eu lobortis. In metus vulputate eu scelerisque felis. Nunc pulvinar sapien et ligula ullamcorper malesuada.",
                        name: "Vásárló 1"
                    },
                    {
                        id: 2,
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Eget est lorem ipsum dolor sit amet. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Sollicitudin nibh sit amet commodo nulla facilisi.",
                        name: "Vásárló 2"
                    },
                    {
                        id: 3,
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet. Diam maecenas ultricies mi eget mauris pharetra et. Sed blandit libero volutpat sed cras ornare arcu dui. Nibh tellus molestie nunc non blandit massa enim nec dui.",
                        name: "Vásárló 3"
                    },
                    {
                        id: 4,
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Suspendisse in est ante in nibh mauris cursus mattis. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Feugiat scelerisque varius morbi enim nunc.",
                        name: "Vásárló 4"
                    }],
            },
            difference_show: {
                title: "Tapasztald meg, mi választja el az amatőrt a profiktól",
                description: "Kattints a képre",
                image_alt_raw: "Eredeti kép",
                image_alt_edited: "Retusált kép"
            },
            stats: [
                {
                    id: 1,
                    title: "Stat 1",
                    value: "420"
                },
                {
                    id: 2,
                    title: "Stat 2",
                    value: "9"
                },
                {
                    id: 3,
                    title: "Stat 3",
                    value: "32"
                }
            ],
            sponsor: [
                {
                    id: 1,
                    img: sponsor1,
                    alt: "Sponsor 1"
                },
                {
                    id: 2,
                    img: sponsor2,
                    alt: "Sponsor 2"
                },
                {
                    id: 3,
                    img: sponsor3,
                    alt: "Sponsor 3"
                }]
        },
        info_page: {
            services: {
                title: "Szolgáltatások",
                services: [
                    {
                        id: 1,
                        title: "Portré fotózás",
                        price: 25000,
                        description: ["részlet", "részlet"],
                        img: servicesPortraitImage,
                    },
                    {
                        id: 2,
                        title: "Páros fotózás",
                        price: 35000,
                        description: ["részlet", "részlet"],
                        img: servicesCoupleImage
                    },
                    {
                        id: 3,
                        title: "Esküvői fotózás",
                        price: 200000,
                        description: ["részlet", "részlet"],
                        img: servicesWeddingImage
                    },
                    {
                        id: 4,
                        title: "Egyéb",
                        price: 35000,
                        description: ["részlet", "részlet", "részlet"],
                        img: servicesOtherImage
                    }
                ]
            },
            processes: {
                title: "Fotózás folyamata",
                processes: {
                    steps: "lépés",
                    processes: [
                    {
                        id: 1,
                        title: "Kapcsolatfelvétel",
                        description: "congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend",
                        img: processContactImage
                    },
                    {
                        id: 2,
                        title: "Találkozó",
                        description: "tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum",
                        img: processDetailsImage
                    },
                    {
                        id: 3,
                        title: " Körülmények megteremtése ",
                        description: "mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit",
                        img: processConditionsImage
                    },
                    {
                        id: 4,
                        title: " Fotózás napja ",
                        description: "dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin",
                        img: processDayImage
                    },
                    {
                        id: 5,
                        title: " Képek kiválasztása ",
                        description: "pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo",
                        img: processSelectImage
                    },
                    {
                        id: 6,
                        title: "Utómunka",
                        description: "pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo",
                        img: processPostImage
                    },
                    {
                        id: 7,
                        title: " Elkészült fényképek átadása",
                        description: "nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum",
                        img: processDeliveryImage
                    }
                ],
            }},
            faqs: {
                title: "Gyakran Ismételt Kérdések",
                faqs: [
                    {
                        id: 1,
                        title: "Kérdés 1",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Neque ornare aenean euismod elementum nisi quis eleifend quam."
                    },
                    {
                        id: 2,
                        title: "Kérdés 2",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    },
                    {
                        id: 3,
                        title: "Kérdés 3",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Urna cursus eget nunc scelerisque viverra mauris. Nec ullamcorper sit amet risus nullam eget felis."
                    },
                    {
                        id: 4,
                        title: "Kérdés 4",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh. Sollicitudin ac orci phasellus egestas tellus rutrum."
                    },
                    {
                        id: 5,
                        title: "Kérdés 5",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo laoreet sit."
                    },
                    {
                        id: 6,
                        title: "Kérdés 6",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id."
                    }
                ]
            }
        },
        contact_page: {
            title: "Kapcsolat",
            description: "Keress bátran!",
            email_label: "Email",
            email_actual: email,
            phone_label: "Telefonszám",
            phone_actual: phone,
            social_media: "Social Media",
            instagram: instagram,
            facebook: facebook,
            form: {
                name: "Név",
                message: "Üzenet",
                checkbox: "Elfogadom az adatvédelmi irányelveket.",
                submit: "Küldés",
            }
        }
    }
}