import currentsArray from "../../utils/currents";
import productArray from "../../utils/productArray";

type Props = {
    current: number;
    buyButton: (price: number) => void;
};

const Products = ({ buyButton, current }: Props) => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    textAlign: "center",
                }}
            >
                {productArray.map((product) => (
                    <div key={product.id} style={{ margin: "40px" }}>
                        <div>
                            <h4>{product.title}</h4>
                        </div>
                        <div>{product.description}</div>
                        <div style={{ margin: "20px" }}>
                            {currentsArray[current].title}: {""}{" "}
                            {Math.round(
                                product.priceUSD * currentsArray[current].value
                            )}
                        </div>   
                        <button
                            key={product.id}
                            onClick={() => buyButton(product.id)}
                        >
                            Buy
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
