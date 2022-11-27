import PropTypes from "prop-types";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { FiCheckCircle } from "react-icons/fi";

export default function UnFollowBtn(props) {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const http = useAxios();

    async function unFollowUser() {
        const unFollowUserUrl = `social/profiles/${props.name}/unfollow`;

        try {
            await http.put(unFollowUserUrl);
            navigate(0)
        } catch (error) {
            console.log(error);
            setError("There seems to be a problem with unfollowing this profile")
        };
    };
    if (error) {
        return <Alert variant="danger">{error}</Alert>
    };
    return (
        <button
            className="primary__btn secondary__btn follow__btn unFollow__btn"
            id={props.name}
            type="button"
            value={props.name}
            onClick={unFollowUser}>
            <FiCheckCircle className="following__checkMark" />
        </button>
    );
};

UnFollowBtn.propTypes = {
    name: PropTypes.string.isRequired,
}; 