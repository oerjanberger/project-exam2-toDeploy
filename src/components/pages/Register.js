import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Heading from "../layout/Heading";
import PreAuthBackground from "../layout/PreAuthBackground";
import RegisterForm from "../forms/RegisterForm";


export default function Register() {
    // added because of experience position of viewport was not at the when entering a page. Possibly because of an issue with the footer
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <Helmet>
                <title>Register</title>
                <meta
                    name="description"
                    content="Come join us and your fellow students. Register with your noroff email account"
                />;
            </Helmet>
            <PreAuthBackground image="/images/backgroundImages/registerPageImage.jpg" />
            <Container className="main__container" >
                <div className="form__background">
                    <Heading size="1" content="Register" />
                    <RegisterForm />
                </div>
            </Container>
        </>
    );
};