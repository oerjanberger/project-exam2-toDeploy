import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import EditImages from "../forms/EditImages";
import { AiOutlineClose } from "react-icons/ai";

export default function EditImagesModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="Edit images"
            centered
        >
            <AiOutlineClose onClick={props.onHide} className="closeBtn" onKeyDown={(e) => e.key === "Enter" ? props.onHide() : null} tabIndex="0" aria-label="close" />
            <Modal.Header>
                <Modal.Title>
                    Edit images
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditImages name={props.name} avatar={props.avatar} banner={props.banner} />
            </Modal.Body>
        </Modal>
    );
};

EditImagesModal.propTypes = {
    props: PropTypes.object,
};