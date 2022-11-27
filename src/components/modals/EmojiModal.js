import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import ShowAllEmojis from "../emojis/ShowAllEmojis";


export default function EmojiModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="log out"
            centered
            className="emoji__modal"
        >
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

