import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import CreatePost from "../forms/CreatePost";
import { AiOutlineClose } from "react-icons/ai";

export default function CreatePostModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="create post"
            centered
        >
            <AiOutlineClose onClick={props.onHide} className="closeBtn" />
            <Modal.Header>
                <Modal.Title>
                    Create Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreatePost />
            </Modal.Body>
        </Modal>
    );
};

CreatePostModal.propTypes = {
    props: PropTypes.object,
};
