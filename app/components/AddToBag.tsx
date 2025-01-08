"use client"

import { Button } from "@/components/ui/button";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: SanityImageSource;
}

export default function AddToBag({
    currency,
    image,
    name,
    price,
    description,
}: ProductCart) {
    const { addItem, handleCartClick } = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: "laksdfj",
    };

    return (
        <Button
            onClick={() => {
                addItem(product);
                handleCartClick();
            }}
        >
            Add to cart
        </Button>
    );
}