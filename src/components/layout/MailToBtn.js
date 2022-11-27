import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import Heading from "../layout/Heading";

const MailToBtn = ({ mailto }) => {
    return (
        <Link to="#" onClick={(e) => {
            window.location.href = mailto;
            e.preventDefault();
        }} className="contact__emailContainer">
            <MdEmail className="contact__emailIcon" />
            <Heading size="2" content="thisistheemail@email.com" />
        </Link>
    );
};

export default MailToBtn