import currentsArray from "../../utils/currents";

type Props = {
    currentChange: (item: any) => void;
};
const Buttons = ({ currentChange }: Props) => {
    return (
        <>
            <div>
                {currentsArray.map((current) => (
                    <button
                        key={current.id}
                        onClick={() => currentChange({ id: current.id })}
                    >
                        {current.title}
                    </button>
                ))}
            </div>
        </>
    );
};
export default Buttons;
