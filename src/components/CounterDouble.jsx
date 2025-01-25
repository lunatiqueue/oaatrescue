import { useSelector } from "react-redux";
import { selectCounter } from "../redux/selectors";

export const CounterDouble = () => {
    const value = useSelector(selectCounter);
    return (
        <div>
            <div>{value*2}</div>
        </div>
    );
}