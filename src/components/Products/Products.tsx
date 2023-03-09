import currentsArray from "../../utils/currents";
import productArray from "../../utils/productArray";

type Props = {
    current: number;
    addProductToCart: (price: number) => void;
};

const Products = ({ addProductToCart, current }: Props) => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    textAlign: "center",
                }}
            >
                {productArray.map((product) => (
                    <div style={{ margin: "40px" }}>
                        <div>
                            <h4>{product.title}</h4>
                        </div>
                        <div>{product.description}</div>
                        <div style={{ margin: "20px" }}>
                            {currentsArray[current].title}: {""}
                            <input
                                style={{
                                    border: "none",
                                    textAlign: "left",
                                    fontSize: "15px",
                                    width: "50px",
                                }}
                                type="text"
                                value={Math.round(
                                    product.priceUSD *
                                        currentsArray[current].value
                                )}
                            />
                        </div>
                        <button
                            key={product.id}
                            onClick={() => addProductToCart(product.id)}
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
