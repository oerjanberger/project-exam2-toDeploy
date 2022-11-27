import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import GetUsersFollowers from "../getFunctions/GetUsersFollowers"
import Heading from "../layout/Heading";

export default function Following() {
    return (
        <>
            <Helmet>
                <title>Your followers</title>
                <meta
                    name="description"
                    content="Here are all your profiles followers, you can always check their profiles out and follow them back"
                />;
            </Helmet>
            <Container className="main__container">
                <Heading size="1" content="Followers" />
                <GetUsersFollowers />
            </Container>
        </>
    );
};