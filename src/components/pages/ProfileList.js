import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Heading from "../layout/Heading";
import GetAllProfiles from "../getFunctions/GetAllProfiles";
import CreatePostBtn from "../layout/CreatePostBtn";

export default function ProfileList() {
    return (
        <>
            <Helmet>
                <title>Profile list</title>
                <meta
                    name="description"
                    content="This is were all profiles registered to RE:Act is. Find someone interesting? Give them a follow then! They might just follow you back"
                />;
            </Helmet>
            <Container className="main__container profileList__page">
                <Heading size="1" content="Profiles" />
                <GetAllProfiles />
                <CreatePostBtn />
            </Container>
        </>
    );
};