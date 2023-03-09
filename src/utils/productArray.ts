export type Product = {
    id: number;
    title: string;
    description: string;
    priceUSD: number;
};

const productArray: Product[] = [
    {
        id: 1,
        title: "iPhone 12",
        description: "This is iPhone 12 ....",
        priceUSD: 750,
    },
    {
        id: 2,
        title: "iPhone 8",
        description: "This is iPhone 8 ....",
        priceUSD: 850,
    },
    {
        id: 3,
        title: "iPhone X",
        description: "This is iPhone X ....",
        priceUSD: 1250,
    },
];



export const getProductObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    );

export default productArray;
