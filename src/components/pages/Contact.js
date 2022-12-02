import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Heading from "../layout/Heading";
import MailToBtn from "../layout/MailToBtn";

export default function Contact() {
    // added because of experience position of viewport was not at the when entering a page. Possibly because of an issue with the footer
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <Helmet>
                <title>Contact us</title>
                <meta
                    name="description"
                    content="We are only based online, but if you have any questions or want to report an error please don't hesitate to contact us on thisistheemail@email.com"
                />;
            </Helmet>
            <Container className="main__container contact__page">
                <Heading size="1" content="Contact us" />
                <p>We are only based online, but if you have any questions or want to report an error please don't hesitate to contact us on this email.</p>
                <MailToBtn mailto="mailto:thisistheemail@email.com" />
            </Container>
        </>
    );
};