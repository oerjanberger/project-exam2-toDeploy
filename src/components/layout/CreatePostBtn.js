import { useState } from "react";
import CreatePostModal from "../modals/CreatePostModal";
import { BiCommentAdd } from "react-icons/bi";

export default function CreatePostBtn() {
    const [modalShow, setModalShow] = useState(false)

    return (
        <>
            <div className="createPostBtn__container" onClick={() => setModalShow(true)} onKeyDown={(e) => e.key === "Enter" ? setModalShow(true) : setModalShow(false)} tabIndex="1">
                <BiCommentAdd className="createPostBtn__icon" aria-label="Create post" />
            </div>
            <CreatePostModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};
