import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import ShowAllEmojis from "../emojis/ShowAllEmojis";
import { AiOutlineClose } from "react-icons/ai";
export default function EmojiModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="log out"
            centered
            className="emoji__modal"
        >
            <AiOutlineClose onClick={props.onHide} className="closeBtn" onKeyDown={(e) => e.key === "Enter" ? props.onHide() : null} tabIndex="0" aria-label="close" />
            <Modal.Body>
                <div className="Emoji__container" >
                    <ShowAllEmojis />
                </div>
            </Modal.Body>
        </Modal >
    );
};

EmojiModal.propTypes = {
    props: PropTypes.object,
};

