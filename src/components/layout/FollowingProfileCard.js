import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import CheckIfFollowing from "../follow/CheckIfFollowing";
export default function FollowingProfileCard({ name, avatar, following }) {
    const avatarAltText = "this is the avatar image of " + name;
    return (
        <Card className="profileCard profileCard__following">
            <Link to={`/profiles/${name}`} className="profileCard__container">
                <div className="profileCard__imgContainer">
                    <div className="avatar__img__border profileCard__avatar__border">
                        <img src={avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                    </div>
                </div>
                <Card.Body>
                    <div className="profileCard__profile__container">
                        <div className="profileCard__heading__container ">
                            <Card.Title>{name}</Card.Title>
                        </div>
                    </div>
                </Card.Body>
            </Link>
            <div className="profileCard__followingBtn__container">
                <CheckIfFollowing followingNames={following} profileName={name} />
            </div>
        </Card>
    );
};

FollowingProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    following: PropTypes.array.isRequired,
};