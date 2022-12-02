import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../loader/Loading";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import moment from "moment";
import Heading from "../layout/Heading";
import CommentBtn from "../layout/CommentBtn";
import CreateComment from "../forms/CreateComment";
import CommentCard from "../layout/CommentCard";
import LargeImage from "../modals/LargeImage";
import DisplayReactions from "../layout/DisplayReactions";
import ReactionBtn from "../layout/ReactionBtn";

// gets the specific post based on the id from the params
export default function GetSpecificPost() {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageModalShow, setImageModalShow] = useState(false);

    let { id } = useParams();
    const postUrl = `social/posts/${id}?_author=true&_comments=true&_reactions=true`;

    const http = useAxios();

    useEffect(() => {
        async function getSpecificPostData() {
            // added because of experience position of viewport was not at the when entering a page. Possibly because of an issue with the footer
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            try {
                const response = await http.get(postUrl);
                setPost(response.data);
                setComments(response.data.comments);
            } catch (error) {
                console.log(error);
                setError("There seems to be a problem with showing the post, refresh the page or try again later");
            } finally {
                setLoading(false);
            };
        }
        getSpecificPostData();
    }, []);

    if (loading) {
        return <Loading />
    };

    if (error) {
        return <Alert variant="danger">{error}</Alert>
    };

    const avatarAltText = `This is the avatar image for ${post.author.avatar}`;
    return (
        <>
            <Helmet>
                <title>{post.title}</title>
                <meta
                    name="description"
                    content={post.body ? post.body : post.title}
                />;
            </Helmet>
            <Heading size="1" content={post.title} />
            <div className="specificPost__imgContainer">
                <img src={post.media} className="specificPost__img" alt="" onClick={() => setImageModalShow(true)} onKeyDown={(e) => e.key === "Enter" ? setImageModalShow(true) : setImageModalShow(false)} tabIndex="1" />
            </div>
            <LargeImage
                show={imageModalShow}
                onHide={() => setImageModalShow(false)}
                image={post.media}
            />
            <Link to={`/profiles/${post.author.name}`} className="specificPost__profileContainer">
                <div className="avatar__img__border profileCard__avatar__border">
                    <img src={post.author.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : post.author.avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                </div>
                <Heading size="2" content={post.author.name} />
            </Link>
            <div className="specificPost__dateContainer">
                <p>Created: {moment(post.created).format('lll')}</p>
                <p>Updated: {moment(post.updated).calendar()}</p>
            </div>
            <p>{post.body}</p>
            <div className="specificPost__interactionInfoContainer">
                <DisplayReactions props={post.reactions} />
                <div className="specificPost__numberCommentsContainer">
                    <p className="number">{post._count.comments}</p>
                    <p>Comments</p>
                </div>
            </div>
            <hr></hr>
            <div className="specificPost__interactionBtnContainer">
                <ReactionBtn id={post.id} />
                <CommentBtn />
            </div>
            <hr></hr>
            <CreateComment />
            <Heading size="3" content="Comments" />
            <Container className="specificPost__commentsContainer">
                {comments.map(function (comment) {
                    const { id, body, owner, created, author } = comment;
                    return <CommentCard key={id} id={id} body={body} owner={owner} created={moment(created).calendar()} avatar={author.avatar} banner={author.banner} />
                })}
            </Container>
        </>
    );
};