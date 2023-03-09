import Buttons from "../../components/Buttons/Buttons";
import Products from "../../components/Products/Products";
import TotalCount from "../../components/TotalCount/TotalCount";

type Props = {
    currentChange: (item: any) => void;
    productsInCart: {
        [id: number]: number;
    };
    current: number;
    addProductToCart: (price: number) => void;
};

const Task2 = ({
    addProductToCart,
    currentChange,
    productsInCart,
    current,
}: Props) => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "100px",
                }}
            >
                <h1>Our shop page</h1>
                <Buttons currentChange={currentChange} />
                <Products
                    current={current}
                    addProductToCart={addProductToCart}
                />
                <TotalCount current={current} productsInCart={productsInCart} />
            </div>
        </>
    );
};
export default Task2;
