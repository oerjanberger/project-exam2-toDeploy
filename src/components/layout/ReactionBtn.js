import { useState } from "react";
import EmojiModal from "../modals/EmojiModal";
import { BsFillEmojiSmileFill } from "react-icons/bs";

export default function ReactionBtn() {
    const [showEmojis, setShowEmojis] = useState(false);

    return (
        <>
            <button className="specificPost__interactBtn" onClick={() => setShowEmojis(true)} onKeyDown={(e) => e.key === "Enter" ? setShowEmojis(true) : setShowEmojis(false)}>
                <img src="/images/logo//logo_main.png" alt="react to the post" className="logo__btn" />
                <BsFillEmojiSmileFill className="reactBtn__emoji" />
            </button>
            <EmojiModal
                show={showEmojis}
                onHide={() => setShowEmojis(false)}
            />
        </>
    );
};
