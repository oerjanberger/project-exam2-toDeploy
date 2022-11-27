import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Footer() {
    const [auth] = useContext(AuthContext);
    return (
        <footer>
            <div className="footer__linkContainer">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="footer__logoContainer">
                {auth ? (
                    <Link to="/postList"><img src="/images/logo//logo_secondary.png" alt="React logo, Home button" className="logo__footer"></img></Link>
                ) : (
                    <Link to="/" end><img src="/images/logo//logo_secondary.png" alt="React logo, Home button" className="logo__footer"></img></Link>
                )}
                <p>Copyright &copy;</p>
            </div>
        </footer>
    );
};
