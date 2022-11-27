import Spinner from "react-bootstrap/Spinner";
export default function Loading() {
    return (
        <div className="loading__container">
            <img src="/images/logo//logo_main.png" alt="react logo, react to the post" className="logo__btn" />
            <Spinner animation="border" variant="secondary" />
        </div>
    );
};
