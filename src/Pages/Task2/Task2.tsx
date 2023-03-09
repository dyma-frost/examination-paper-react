import Buttons from "../../components/Buttons/Buttons";
import Products from "../../components/Products/Products";
import TotalCount from "../../components/TotalCount/TotalCount";

type Props = {
    currentChange: (item: any) => void;
    totalCount: {
        [id: number]: number;
    };
    current: number;
    buyButton: (price: number) => void;
};

const Task2 = ({ buyButton, currentChange, totalCount, current }: Props) => {
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
                <Products current={current} buyButton={buyButton} />
                <TotalCount current={current} totalCount={totalCount} />
            </div>
        </>
    );
};
export default Task2;
