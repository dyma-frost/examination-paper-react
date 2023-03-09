export type Current = {
    id: number;
    title: string;
    value: number;
};

const currentsArray: Current[] = [
    {
        id: 1,
        title: "USD",
        value: 1,
    },
    {
        id: 2,
        title: "EUR",
        value: 0.95,
    },
    {
        id: 3,
        title: "UAH",
        value: 36.93,
    },
    {
        id: 4,
        title: "PLN",
        value: 4.44,
    },
];
export default currentsArray;
