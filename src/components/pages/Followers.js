import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import GetUsersFollowers from "../getFunctions/GetUsersFollowers"
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";

export default function Following() {
    return (
        <>
            <Helmet>
                <title>The users followers</title>
                <meta
                    name="description"
                    content="Here are all your profiles followers, you can always check their profiles out and follow them back"
                />;
            </Helmet>
            <Container className="main__container">
                <Heading size="1" content="Followers" />
                <GetUsersFollowers />
                <div className="profileList__btnContainer">
                    <Link to={"/profileList"}><button type="button" className="primary__btn">Profile list</button></Link>
                </div>
            </Container>
        </>
    );
};