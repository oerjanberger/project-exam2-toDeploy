import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import PreAuthBackground from "../layout/PreAuthBackground";

export default function Home() {
    // added because of experience position of viewport was not at the when entering a page. Possibly because of an issue with the footer
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <PreAuthBackground image="/images/backgroundImages/IndexPageImage.jpg" />
            <Container>
                <Heading size="1" content="Welcome to us" />
                <div className="homepage__buttons">
                    <Link to={"/register"}><button className="primary__btn">Register</button></Link>
                    <Link to={"/login"}><button className="primary__btn secondary__btn">Login</button></Link>
                </div>
            </Container>
        </>
    );
};