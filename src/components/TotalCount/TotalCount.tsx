import currentsArray from "../../utils/currents";
import productArray, { getProductObject } from "../../utils/productArray";

type Props = {
    current: number;
    productsInCart: {
        [id: number]: number;
    };
    productObject?: {
        [id: number]: any;
    };
};

const TotalCount = ({
    productsInCart,
    productObject = getProductObject(productArray),
    current }: Props) => {
    
    return (
        <>
            <div>
                Total:{" "}
                {/* {Object.keys(productArray).reduce(
                    (total, productId) =>
                        total +
                        Math.round(
                            productArray[parseInt(productId)].priceUSD *
                                currentsArray[current].value
                        ),
                    0
                )} */}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        Math.round(
                        productObject[parseInt(productId)].priceUSD *
                            productsInCart[parseInt(productId)] * currentsArray[current].value),
                    0
                )}
            </div>
        </>
    );
};
export default TotalCount;
