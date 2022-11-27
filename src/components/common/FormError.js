import propTypes from "prop-types";

export default function FormError({ children }) {
    return <div className="form__error">{children}</div>
};

FormError.propTypes = {
    children: propTypes.node.isRequired,
};