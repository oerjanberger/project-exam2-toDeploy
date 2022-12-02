import PropTypes from "prop-types";

// sets the background image of the three pages home, register and login. 
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

