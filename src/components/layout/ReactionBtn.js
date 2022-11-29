import { useState } from "react";
import EmojiModal from "../modals/EmojiModal";
import { BsFillEmojiSmileFill } from "react-icons/bs";

export default function ReactionBtn() {
    const [showEmojis, setShowEmojis] = useState(false);

    return (
        <>
            <div className="specificPost__interactBtn" onClick={() => setShowEmojis(true)} >
                <img src="/images/logo//logo_main.png" alt="react logo, react to the post" className="logo__btn" />
                <BsFillEmojiSmileFill className="reactBtn__emoji" />
            </div>
            <EmojiModal
                show={showEmojis}
                onHide={() => setShowEmojis(false)}
            />
        </>
    );
};
