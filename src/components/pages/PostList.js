import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Heading from "../layout/Heading";
import GetAllPosts from "../getFunctions/GetAllPosts";
import CreatePostBtn from "../layout/CreatePostBtn";

export default function PostList() {
    return (
        <>
            <Helmet>
                <title>Post list</title>
                <meta
                    name="description"
                    content="This is the place to see all users post"
                />;
            </Helmet>
            <Container className="main__container postList__page">
                <Heading size="1" content="Posts" />
                <GetAllPosts />
                <CreatePostBtn />
            </Container>
        </>

    );
};