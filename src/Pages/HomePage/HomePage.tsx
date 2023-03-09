import { Link } from "react-router-dom";

type Props = {};

const HomePage = (props: Props) => {
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
                <h1
                    style={{
                        textAlign: "center",
                    }}
                >
                    Контрольна робота <br /> студента групи fe2710 Дмитра Мороза
                </h1>
                <div
                    style={{
                        width: "20%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "50px",
                    }}
                >
                    <button>
                        <Link to="/task1">Task 1</Link>
                    </button>
                    <button>
                        <Link to="/task2">Task 2</Link>
                    </button>
                </div>
            </div>
        </>
    );
};
export default HomePage;
