import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose } from "react-icons/ai";

export default function LargeImage(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="log out"
            centered
            className="imageModal"
        >
            <AiOutlineClose onClick={props.onHide} className="closeBtn" onKeyDown={(e) => e.key === "Enter" ? props.onHide() : null} tabIndex="0" aria-label="close" />
            <img src={props.image} className="modal__largeImg" alt="" />
        </Modal>
    );
};

LargeImage.propTypes = {
    props: PropTypes.object,
};
