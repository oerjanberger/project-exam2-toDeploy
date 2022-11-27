import { Component } from "react";

export default class MorePostBtn extends Component {
    componentDidMount() {
        const morePostBtn = document.querySelector("#morePost__btn");
        morePostBtn.addEventListener("click", () => {
            morePostBtn.style.display = "none"
        });
    };
    render() {
        return (
            <button className="primary__btn morePost__btn" id="morePost__btn">More posts</button>
        );
    };
};