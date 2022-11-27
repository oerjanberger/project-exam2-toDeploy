import { Container } from "react-bootstrap";
import GetSpecificPost from "../getFunctions/GetSpecificPost";
import CreatePostBtn from "../layout/CreatePostBtn";

export default function SpecificPost() {
    return (
        <Container className="main__container specificPost__page">
            <GetSpecificPost />
            <CreatePostBtn />
        </Container>
    );
};