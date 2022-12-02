import PropTypes from "prop-types";

// Heading with a variable size prop based on what is passed in the component
export default function Heading({ size = "1", content }) {
    const VariableHeading = `h${size}`;
    return (
        <VariableHeading >{content}</VariableHeading>
    );
};

Heading.propTypes = {
    size: PropTypes.string,
    content: PropTypes.string.isRequired,
};
