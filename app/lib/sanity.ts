import {createClient} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
export const client = createClient({
    projectId: 'dftee7c2',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: false,
});
 const builder = imageUrlBuilder(client);
 export function urlFor(source:SanityImageSource){
    return builder.image(source);
 }