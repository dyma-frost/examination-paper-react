import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Task1 from "../Pages/Task1/Task1";
import Task2 from "../Pages/Task2/Task2";

type Props = {};

type TotalCount = {
    [id: number]: number;
};

const App = (props: Props) => {
    const [current, setCount] = useState<number>(0);
    const currentChange = (item: any) => {
        setCount(() => item.id - 1);
    };

    const [totalCount, setTotalCount] = useState<TotalCount>({
        1: 0,
        2: 0,
        3: 0,
    });

    const buyButton = (id: number) => {
        setTotalCount((prevState) => ({
            ...prevState,
            [id]: prevState[id] + 1,
        }));
    };

    return (
        <>
            <HomePage />
            <Routes>
                {" "}
                <Route path="/task1" element={<Task1 />} />
                <Route
                    path="/task2"
                    element={
                        <Task2
                            currentChange={currentChange}
                            current={current}
                            totalCount={totalCount}
                            buyButton={buyButton}
                        />
                    }
                />
            </Routes>
        </>
    );
};
export default App;
