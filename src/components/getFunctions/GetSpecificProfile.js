import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import { Container } from "react-bootstrap";
import Loading from "../loader/Loading";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import moment from "moment";
import Heading from "../layout/Heading";
import PostCard from "../layout/PostCard";
import CreatePostBtn from "../layout/CreatePostBtn";
import LargeImage from "../modals/LargeImage";
import CheckIfFollowing from "../follow/CheckIfFollowing";

export default function GetSpecificProfile() {
    const [profile, setProfile] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [following, setFollowing] = useState([]);
    const [error, setError] = useState(null);
    const [bannerModalShow, setBannerModalShow] = useState(false);
    const [avatarModalShow, setAvatarModalShow] = useState(false);
    const [auth] = useContext(AuthContext);

    let { name } = useParams();
    const profileUrl = `social/profiles/${name}?_following=true&_followers=true`;
    const postsUrl = `social/profiles/${name}/posts/?_comments=true&_reactions=true`;
    const followingUrl = `social/profiles/${auth.name}?_following=true`;

    const http = useAxios();

    useEffect(() => {
        async function getSpecificProfileData() {
            // added because of experience position of viewport was not at the when entering a page. Possibly because of an issue with the footer
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            try {
                const Profile = await http.get(profileUrl);
                const Posts = await http.get(postsUrl);
                const userFollowing = await http.get(followingUrl);
                const followingData = userFollowing.data.following;
                let followingNames = [];

                followingData.forEach(function (obj) {
                    followingNames.push(obj["name"]);
                });
                setFollowing(followingNames);
                setProfile(Profile.data);
                setPosts(Posts.data);
            } catch (error) {
                console.log(error);
                setError("There seems to be a problem with showing this profile, refresh the page or try again later");
            } finally {
                setLoading(false);
            }
        }
        getSpecificProfileData();
    }, []);

    if (loading) {
        return <Loading />
    };

    if (error) {
        return <Alert variant="danger">Unfortunately an error has occurred: {error}</Alert>
    };

    const bannerAltText = `This is the banner image for ${profile.banner}`;
    const avatarAltText = `This is the avatar image for ${profile.avatar}`;

    return (
        <>
            <Helmet>
                <title>The profile of {profile.name}</title>
                <meta
                    name="description"
                    content="This is the profile of"{...profile.name}
                />;
            </Helmet>
            <div className="specificPost__bannerContainer" onClick={() => setBannerModalShow(true)} onKeyDown={(e) => e.key === "Enter" ? setBannerModalShow(true) : setBannerModalShow(false)} tabIndex="1">
                <img src={profile.banner === null ? "/images/defaultImages/default_banner_img.jpg" : profile.banner} className="specificProfile__bannerImg" alt={bannerAltText} />
            </div>
            <Container className="main__container specificProfile__page">
                <div className="specificProfile__profileContainer">
                    <div className="avatar__img__border profileCard__avatar__border specificProfile__avatar__border" onClick={() => setAvatarModalShow(true)} onKeyDown={(e) => e.key === "Enter" ? setAvatarModalShow(true) : setAvatarModalShow(false)} tabIndex="1">
                        <img src={profile.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : profile.avatar} className="nav__icon avatar__img__small specificProfile__avatar__img" alt={avatarAltText} />
                    </div>
                    <div className="specificPost__headingContainer">
                        <Heading size="1" content={profile.name} />
                        <CheckIfFollowing followingNames={following} profileName={profile.name} />
                    </div>
                </div>
                <div className="specificPost__profileInfo__Container">
                    <Link to={`/profiles/${profile.name}/followers`} className="profileCard__followersContainer">
                        <p className="number">{!profile._count.followers ? 0 : profile._count.followers}</p>
                        <p>Followers</p>
                    </Link>
                    <Link to={`/profiles/${profile.name}/following`} className="profileCard__postsContainer">
                        <p className="number">{!profile._count.following ? 0 : profile._count.following}</p>
                        <p>Following</p>
                    </Link>
                </div>
                <div className="profileCard__postsContainer">
                    <Heading size="2" content="Posts" />
                    <p className="number posts__number">{!profile._count.posts ? 0 : profile._count.posts}</p>
                </div>
                <Container className="posts__container">
                    {posts.map(function (post) {
                        const { id, title, created, updated, media, body, _count, reactions } = post;
                        return <PostCard key={id} id={id} avatar={profile.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : profile.avatar} name={profile.name} title={title} created={moment(created).format('lll')} updated={moment(updated).calendar()} image={media} body={body} reactions={reactions.length === 0 ? [] : reactions} comments={_count.comments} />
                    })}
                </Container>
                <CreatePostBtn />
            </Container>
            <LargeImage
                show={avatarModalShow}
                onHide={() => setAvatarModalShow(false)}
                image={profile.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : profile.avatar}
            />
            <LargeImage
                show={bannerModalShow}
                onHide={() => setBannerModalShow(false)}
                image={profile.banner === null ? "/images/defaultImages/default_banner_img.jpg" : profile.banner}
            />
        </>
    );
};