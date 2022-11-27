import { useState } from "react";
import CreatePostModal from "../modals/CreatePostModal";
import { BiCommentAdd } from "react-icons/bi";

export default function CreatePostBtn() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="createPostBtn__container" onClick={() => setModalShow(true)}>
                <BiCommentAdd className="createPostBtn__icon" />
            </div>
            <CreatePostModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};
