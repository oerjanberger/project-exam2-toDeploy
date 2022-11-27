import PropTypes from "prop-types";

export default function PreAuthBackground({ image }) {
    const newImage = image
    return (
        <div className="pre__auth__container home__page" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + `${newImage}`})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} />
    );
};

PreAuthBackground.propTypes = {
    image: PropTypes.string.isRequired,
};

