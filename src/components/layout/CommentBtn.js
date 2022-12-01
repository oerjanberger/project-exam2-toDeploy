import { Component } from "react";
import { BiComment } from "react-icons/bi";

export default class CommentBtn extends Component {
    componentDidMount() {
        const commentBtn = document.querySelector(".comment__btn");
        const commentInput = document.querySelector("#comment__input");
        commentBtn.addEventListener("click", () => {
            commentInput.focus();
        });

        commentBtn.addEventListener("onKeyDown", (e) => {
            if (e.key === "Enter") {
                commentInput.focus();
            }
        });
    };
    render() {
        return (
            <button type="button" className="specificPost__interactBtn comment__btn">Comment<BiComment className="icon__comment" /></button>
        );
    };
};