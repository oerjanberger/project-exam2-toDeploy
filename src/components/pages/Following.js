import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import GetUsersFollowing from "../getFunctions/GetUsersFollowing"
import Heading from "../layout/Heading";

export default function Following() {
    return (
        <>
            <Helmet>
                <title>Profiles you are following</title>
                <meta
                    name="description"
                    content="This is the profiles you are following. If you want to, this is where you manage them and can unfollow"
                />;
            </Helmet>
            <Container className="main__container">
                <Heading size="1" content="Following" />
                <GetUsersFollowing />
            </Container>
        </>
    );
};