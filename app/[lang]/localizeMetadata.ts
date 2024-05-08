import {Metadata} from "next";
import {dictionary} from "@/content";

export function getMetadata(params: { lang: string }): Metadata {
    return {
        title: dictionary[params.lang].metadata.title,
        description: dictionary[params.lang].metadata.description,
    };
}