import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Heading from "../layout/Heading";

export default function About() {
    // added because of experience position of viewport was not at the when entering a page. Possibly because of an issue with the footer
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <Helmet>
                <title>About us</title>
                <meta
                    name="description"
                    content="We are a social media company that hope create a community of School students from the Noroff University"
                />;
            </Helmet>
            <div className="infoPage__imgContainer">
                <img src="/images/backgroundImages/aboutPageImage.jpg" alt="Thankful" className="about__image" />
            </div>
            <Container className="main__container about__page">
                <Heading size="1" content="About us" />
                <h2>We are <img src="images/logo/logo_main.png" alt="react" className="about__logo" /></h2>
                <p>We are a social media company that hope create a community of School students from the Noroff University. Hopefully you want to join the community and interact with your fellow students.</p>
                <p>Please be respectful of everyone on the platform. Thank you and welcome to the community</p>
                <p className="about__outlined">This is the final project exam for Ørjan Berger as a student at Noroff university.</p>
            </Container>
        </>
    );
};