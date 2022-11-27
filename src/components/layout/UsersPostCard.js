import PropTypes from "prop-types";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import { MdEdit } from "react-icons/md";
import EditPostModal from "../modals/EditPostModal";
import DisplayReactions from "./DisplayReactions";
export default function UsersPostCard({ id, avatar, name, title, created, updated, image, body, reactions, comments }) {
    const avatarAltText = "This is the avatar image of " + name;
    const [modalShow, setModalShow] = useState(false);
    const [postId, setPostId] = useState(null);
    const [postTitle, setPostTitle] = useState(null);
    const [postBody, setPostBody] = useState(null);
    const [postImage, setPostImage] = useState(null);

    return (
        <Card className="postCard">
            <Link to={`/post/${id}`}><Card.Img variant="top" src={image} alt={image === null || image === "" ? "" : title} /></Link>
            <Card.Body>
                <div className="postCard__profileContainer">
                    <div className="avatar__img__border postCard__avatar__border">
                        <img src={avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                    </div>
                    <div className="specificPost__headingContainer usersPost__headingContainer">
                        <Heading size="3" content={name} className="postCard__author" />
                        <button type="button" className="primary__btn edit__Btn" id={id} title={title} body={body} image={image}
                            onClick={() => {
                                setModalShow(true)
                                setPostId(id)
                                setPostTitle(title)
                                setPostBody(body)
                                setPostImage(image)
                            }}>
                            <MdEdit /> Edit
                        </button>
                    </div>
                    <EditPostModal
                        id={postId}
                        title={postTitle}
                        body={postBody}
                        image={postImage}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="postCard__dateContainer">
                    <p className="postCard__date">Created: {created}</p>
                    <p className="postCard__date">Updated: {updated}</p>
                </div>
                <Link to={`/post/${id}`}>
                    <Card.Title>{title}</Card.Title>
                    <div className="postCard__textContainer">
                        <Card.Text>{body && body.length > 100 ? body.substring(0, 100) + "..." : body}</Card.Text>
                    </div>
                    <div className="postCard__interactionContainer">
                        <DisplayReactions props={reactions} />
                        <div className="postCard__commentsContainer">
                            <p className="number">{comments}</p>
                            <p>Comments</p>
                        </div>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    );
};

UsersPostCard.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    updated: PropTypes.string,
    image: PropTypes.string,
    body: PropTypes.string,
    comments: PropTypes.number.isRequired,
    reactions: PropTypes.array.isRequired,
};