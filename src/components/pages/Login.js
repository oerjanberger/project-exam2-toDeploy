import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Heading from "../layout/Heading";
import PreAuthBackground from "../layout/PreAuthBackground";
import LoginForm from "../forms/LoginForm";

export default function Login() {
    // added because of experience position of viewport was not at the when entering a page. Possibly because of an issue with the footer
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <Helmet>
                <title>Login</title>
                <meta
                    name="description"
                    content="Login to see your profile and what your fellow students are reacting to"
                />;
            </Helmet>
            <PreAuthBackground image="/images/backgroundImages/loginPageImage.jpg" />
            <Container className="main__container" >
                <div className="form__background">
                    <Heading size="1" content="Login" />
                    <LoginForm />
                </div>
            </Container>
        </>
    );
};