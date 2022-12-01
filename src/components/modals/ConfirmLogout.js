import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from "react-icons/ai";

export default function ConfirmLogout({ showModal, cancel, confirm }) {
    return (
        <Modal
            show={showModal}
            onHide={cancel}
            size="lg"
            aria-labelledby="log out"
            centered
            className="logoutModal"
        >
            <AiOutlineClose onClick={cancel} className="closeBtn" onKeyDown={(e) => e.key === "Enter" ? cancel() : null} tabIndex="0" aria-label="close" />
            <Modal.Header >
                <Modal.Title >
                    Are you sure you want to log out?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="logoutModal__btnContainer">
                    <button type="button" className="primary__btn" onClick={confirm} >Log out</button>
                    <button type="button" className="primary__btn secondary__btn" onClick={cancel}>Cancel</button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

ConfirmLogout.propTypes = {
    showModal: PropTypes.bool,
    cancel: PropTypes.func,
    confirm: PropTypes.func,
};


