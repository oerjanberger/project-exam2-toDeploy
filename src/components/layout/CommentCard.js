import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"
export default function CommentCard({ id, body, created, owner, avatar }) {
    const avatarAltText = "This is the avatar image of " + owner;
    return (
        <Card className="commentCard" id={id}>
            <Card.Body>
                <div className="commentCard__infoContainer">
                    <Link to={`/profiles/${owner}`}>
                        <div className="commentCard__profileContainer">
                            <div className="avatar__img__border postCard__avatar__border">
                                <img src={avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                            </div>
                            <Card.Title>{owner}</Card.Title>
                        </div>
                    </Link>

                    <p>{created}</p>
                </div>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
};

CommentCard.propTypes = {
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    avatar: PropTypes.string,
};

