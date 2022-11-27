import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

export default function Reactions({ symbol, count, id }) {
    const navigate = useNavigate();

    const http = useAxios();

    async function handleClick(value, id) {
        const reactUrl = `social/posts/${id}/react/${value}`
        try {
            await http.put(reactUrl);
            navigate(0)
        } catch (error) {
            console.log(error);
        };
    };
    return (
        <div className="specificPost__numberReactionsContainer">
            <p className="number reaction__number">{count}</p>
            <button type="button" value={symbol} id={id} onClick={(e) => handleClick(e.currentTarget.value, e.currentTarget.id)} className="emoji__btn">{symbol}</button>
        </div>
    )
}

Reactions.propTypes = {
    symbol: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
};