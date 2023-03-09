import React, { useState } from "react";

type Props = {};


const Task1 = (props: Props) => {
    let count = [
        {
            id: 1,
            value: 0,
        },
        {
            id: 2,
            value: 0,
        },
        {
            id: 3,
            value: 0,
        },
    ];

    const [counter, setCounter] = useState(count);
    const increment = (id: number) => {
        const newCounter = counter.map((el) =>
            el.id === id ? { ...el, value: el.value + 1 } : el
        );
        setCounter(newCounter);
    };
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
                <h1>Перше завдання:</h1>
                <div>
                    {counter.map((el) => (
                        <button
                            onClick={() => {
                                increment(el.id);
                            }}
                        >
                            change count ({el.value})
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Task1;
