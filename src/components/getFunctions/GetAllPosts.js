import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Loading from "../loader/Loading";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import PostCard from "../layout/PostCard";
import moment from 'moment'

export default function GetAllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [noMoreError, setNoMoreError] = useState(null);
    const [alertDisplay, setAlertDisplay] = useState("none");
    const [showMoreButtonDisplay, setShowMoreButtonDisplay] = useState("block");
    const [showLessButtonDisplay, setShowLessButtonDisplay] = useState("none");
    const [offset, setOffset] = useState(0);

    const http = useAxios();

    useEffect(() => {
        async function getPostData() {
            try {
                const response = await http.get(`social/posts/?limit=100&offset=${offset}&_author=true&_comments=true&_reactions=true`);
                setPosts(response.data);
            } catch (error) {
                console.log(error);
                setError("Unfortunately we were unable to load the posts, refresh the page or try again later")
            } finally {
                setLoading(false);
            };
        };
        getPostData();
    }, []);


    async function showMore(newOffset) {
        let count = offset + newOffset;
        setOffset(count);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        try {
            const response = await http.get(`social/posts/?limit=100&offset=${100 + offset}&_author=true&_comments=true&_reactions=true`);
            setPosts(response.data);
            setShowLessButtonDisplay("block");
            if (response.data.length === 0) {
                setAlertDisplay("block");
                setShowMoreButtonDisplay("none");
                setNoMoreError("You have reached the end of all posts, we have nothing more to show you");
            };
        } catch (error) {
            console.log(error);
            setError("Unfortunately we were unable to load the posts, refresh the page or try again later");
        } finally {
            setLoading(false);
        };
    };

    async function showLess(newOffset) {
        let count = offset - newOffset;
        setOffset(count);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setAlertDisplay("none");
        setShowMoreButtonDisplay("block");
        try {
            const response = await http.get(`social/posts/?limit=100&offset=${offset - 100}&_author=true&_comments=true&_reactions=true`);
            setPosts(response.data);
            if (offset === 100) {
                setShowLessButtonDisplay("none");
            };
        } catch (error) {
            console.log(error);
            setError("Unfortunately we were unable to load the posts, refresh the page or try again later");
        } finally {
            setLoading(false);
        };
    };

    if (loading) {
        return <Loading />
    };

    if (error) {
        return <Alert variant="danger">{error}</Alert>
    };
    return (
        <Container className="posts__container">

            {posts.map(function (post) {
                const { id, author, title, created, updated, media, body, _count, reactions } = post;
                return <PostCard key={id} id={id} avatar={author.avatar} name={author.name} title={title} created={moment(created).format('lll')} updated={moment(updated).calendar()} image={media} body={body} reactions={reactions.length === 0 ? [] : reactions} comments={_count.comments} />
            })}
            <div className="moreLess__btnContainer">
                <button type="button" className="primary__btn secondary__btn showLess__btn" onClick={() => showLess(100)} style={{ display: showLessButtonDisplay }}>Show Previous</button>
                <button type="button" className="primary__btn showMore__btn" onClick={() => showMore(100)} style={{ display: showMoreButtonDisplay }}>Show more</button>
            </div>
            <Alert variant="primary" style={{ display: alertDisplay }}>{noMoreError}</Alert>
        </Container>
    );
};
