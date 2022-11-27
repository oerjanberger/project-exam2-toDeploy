import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import EditPost from "../forms/EditPost";
import { AiOutlineClose } from "react-icons/ai";

export default function EditPostModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <AiOutlineClose onClick={props.onHide} className="closeBtn" />
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditPost id={props.id} title={props.title} body={props.body} image={props.image} />
            </Modal.Body>
        </Modal>
    );
};

EditPostModal.propTypes = {
    props: PropTypes.object,
};