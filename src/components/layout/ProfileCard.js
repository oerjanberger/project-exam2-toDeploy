import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import CheckIfFollowing from "../follow/CheckIfFollowing";

// This is the card for a users profile.
export default function ProfileCard({ name, avatar, banner, posts, followers, following }) {
    const avatarAltText = "this is the avatar image of " + name;
    const bannerAltText = "this is the banner image of " + name;

    return (
        <Card className="profileCard">
            <Link to={`/profiles/${name}`} className="profileCard__container">
                <div className="profileCard__imgContainer">
                    <Card.Img variant="left" src={banner === null ? "/images/defaultImages/default_banner_img.jpg" : banner} className="profileCard__banner" alt={bannerAltText} />
                    <div className="avatar__img__border profileCard__avatar__border">
                        <img src={avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                    </div>
                </div>
                <Card.Body>
                    <div className="profileCard__profile__container">
                        <div className="profileCard__heading__container">
                            <Card.Title>{name}</Card.Title>

                        </div>
                        <div className="profileCard__profileInfo__Container">
                            <div className="profileCard__followersContainer">
                                <p className="number">{followers}</p>
                                <p>Followers</p>
                            </div>
                            <div className="profileCard__postsContainer">
                                <p className="number">{posts}</p>
                                <p>Posts</p>
                            </div>
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

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    banner: PropTypes.string,
    posts: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.array.isRequired,
};