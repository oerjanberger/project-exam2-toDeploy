import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Container } from "react-bootstrap";
import Loading from "../loader/Loading";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import ProfileCard from "../layout/ProfileCard";

export default function GetAllProfiles() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [following, setFollowing] = useState([]);
    const [auth] = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [noMoreError, setNoMoreError] = useState(null);
    const [alertDisplay, setAlertDisplay] = useState("none");
    const [showMoreButtonDisplay, setShowMoreButtonDisplay] = useState("block");
    const [showLessButtonDisplay, setShowLessButtonDisplay] = useState("none");
    const [offset, setOffset] = useState(0);

    const http = useAxios();

    useEffect(() => {
        async function getProfileData() {
            try {
                const response = await http.get("social/profiles");
                const userFollowing = await http.get(`social/profiles/${auth.name}?_following=true`);
                const followingData = userFollowing.data.following;
                let followingNames = [];

                followingData.forEach(function (obj) {
                    followingNames.push(obj["name"]);
                });
                setFollowing(followingNames);
                setProfiles(response.data);
            } catch (error) {
                console.log(error);
                setError("Unfortunately we were unable to load the profiles, refresh the page or try again later");
            } finally {
                setLoading(false);
            };
        };
        getProfileData();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    async function showMore(newOffset) {
        let count = offset + newOffset;
        setOffset(count);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        try {
            const response = await http.get(`social/profiles/?limit=100&offset=${100 + offset}`);
            const userFollowing = await http.get(`social/profiles/${auth.name}?limit=100&offset=${100 + offset}&_following=true`);
            const followingData = userFollowing.data.following;
            let followingNames = [];

            followingData.forEach(function (obj) {
                followingNames.push(obj["name"]);
            });
            setFollowing(followingNames);
            setProfiles(response.data);
            setShowLessButtonDisplay("block");
            if (response.data.length === 0) {
                setAlertDisplay("block");
                setShowMoreButtonDisplay("none");
                setNoMoreError("You have reached the end of all profiles, we have no more users");
            }
        } catch (error) {
            console.log(error);
            setError("Unfortunately we were unable to load the profiles, refresh the page or try again later");
        } finally {
            setLoading(false);
        };
    };

    async function showLess(newOffset) {
        let count = offset - newOffset
        setOffset(count);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setAlertDisplay("none");
        setShowMoreButtonDisplay("block");
        try {
            const response = await http.get(`social/profiles/?limit=100&offset=${offset - 100}`);
            const userFollowing = await http.get(`social/profiles/${auth.name}?limit=100&offset=${offset - 100}&_following=true`);
            const followingData = userFollowing.data.following;
            let followingNames = [];

            followingData.forEach(function (obj) {
                followingNames.push(obj["name"]);
            });
            setFollowing(followingNames);
            setProfiles(response.data);

            if (offset === 100) {
                setShowLessButtonDisplay("none");
            };
        } catch (error) {
            console.log(error);
            setError("Unfortunately we were unable to load the profiles, refresh the page or try again later");
        } finally {
            setLoading(false);
        };
    };

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>
    }
    return (
        <Container className="profiles__container">
            {profiles.map(function (profile) {
                const { name, banner, avatar, _count } = profile;
                return <ProfileCard key={name} name={name} banner={banner} avatar={avatar} posts={_count.posts} followers={_count.followers} following={following} />
            })}
            <div className="moreLess__btnContainer">
                <button type="button" className="primary__btn secondary__btn showLess__btn" onClick={() => showLess(100)} style={{ display: showLessButtonDisplay }}>Show Previous</button>
                <button type="button" className="primary__btn showMore__btn" onClick={() => showMore(100)} style={{ display: showMoreButtonDisplay }}>Show more</button>
            </div>
            <Alert variant="primary" style={{ display: alertDisplay }}>{noMoreError}</Alert>
        </Container>
    );
};