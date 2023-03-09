import currentsArray from "../../utils/currents";
import productArray, { getProductObject } from "../../utils/productArray";

type Props = {
    current: number;
    totalCount: {
        [id: number]: number;
    };
    productObject?: {
        [id: number]: any;
    };
};

const TotalCount = ({
    totalCount,
    productObject = getProductObject(productArray),
    current,
}: Props) => {
    return (
        <>
            <div>
                Total:{" "}
                {Object.keys(totalCount).reduce(
                    (total, productId) =>
                        total +
                        Math.round(
                            productObject[parseInt(productId)].priceUSD *
                                totalCount[parseInt(productId)] *
                                currentsArray[current].value
                        ),
                    0
                )}
            </div>
        </>
    );
};
export default TotalCount;
