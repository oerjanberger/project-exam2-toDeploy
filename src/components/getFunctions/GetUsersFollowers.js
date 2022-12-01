import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Loading from "../loader/Loading";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import FollowersProfileCard from "../layout/FollowersProfileCard";

export default function GetUsersFollowers() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [following, setFollowing] = useState([]);
    const [error, setError] = useState(null);
    const [auth] = useContext(AuthContext);

    const http = useAxios();
    let { name } = useParams();
    const profileUrl = `social/profiles/${name}?_following=true&_followers=true`;
    const followingUrl = `social/profiles/${auth.name}?_following=true`;

    useEffect(() => {
        async function getProfileData() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            try {
                const response = await http.get(profileUrl);
                const userFollowing = await http.get(followingUrl);
                const followingData = userFollowing.data.following;
                let followingNames = [];

                followingData.forEach(function (obj) {
                    followingNames.push(obj["name"]);
                });

                setFollowing(followingNames);
                setProfiles(response.data.followers);
            } catch (error) {
                console.log(error);
                setError(`There seems to be a problem with showing ${name} followers, refresh the page or try again later`);
            } finally {
                setLoading(false);
            }
        }
        getProfileData();
    }, []);

    if (loading) {
        return <Loading />
    };

    if (error) {
        return <Alert variant="danger">{error}</Alert>
    };
    return (
        <Container className="followingProfiles__container">
            {profiles.map(function (profile) {
                const { name, avatar } = profile;
                return <FollowersProfileCard key={name} name={name} avatar={avatar} following={following} />
            })}
        </Container>
    );
};