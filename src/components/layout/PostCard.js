import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import DisplayReactions from "../layout/DisplayReactions";
export default function PostCard({ id, avatar, name, title, created, updated, image, body, reactions, comments }) {
    const avatarAltText = "This is the avatar image of " + name;

    return (
        <Card className="postCard">
            <Link to={`/post/${id}`}><Card.Img variant="top" src={image} alt={image === null || image === "" ? "" : title} /></Link>
            <Card.Body>
                <Link to={`/profiles/${name}`}>
                    <div className="postCard__profileContainer">
                        <div className="avatar__img__border postCard__avatar__border">
                            <img src={avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                        </div>
                        <Heading size="3" content={name} className="postCard__author" />
                    </div>
                </Link>
                <Link to={`/post/${id}`}>
                    <div className="postCard__dateContainer">
                        <p className="postCard__date">Created: {created}</p>
                        <p className="postCard__date">Updated: {updated}</p>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <div className="postCard__textContainer">
                        <Card.Text>{body && body.length > 100 ? body.substring(0, 100) + "..." : body}</Card.Text>
                    </div>
                </Link>
                <div className="postCard__interactionContainer">
                    <DisplayReactions props={reactions} />
                    <Link to={`/post/${id}`}>
                        <div className="postCard__commentsContainer">
                            <p className="number">{comments}</p>
                            <p>Comments</p>
                        </div>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

PostCard.propTypes = {
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