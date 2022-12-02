import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HiHome } from "react-icons/hi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import ConfirmLogout from "../modals/ConfirmLogout";

// allows a new user and a logged in user to see different nav options
export default function Navigation() {
    const [auth, setAuth] = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);
    const [showPostListHover, setShowPostListHover] = useState(false);
    const [showProfileListHover, setShowProfileListHover] = useState(false);
    const [showUserHover, setShowUserHover] = useState(false);
    const [showLogoutHover, setShowLogoutHover] = useState(false);
    const navigate = useNavigate();

    // when user avatar is clicked navigates to userprofile
    function setNewUserUrl() {
        if (auth !== null) {
            navigate("userProfile/" + auth.name, { replace: true });
            setAvatarActive();
        };
    };
    // sets the avatar border to active class so it has the correct shadow colour
    function setAvatarActive() {
        const avatarBorder = document.querySelector(".avatar__img__border");
        const { pathname } = document.location;

        if (pathname === "/userProfile/" + auth.name) {
            avatarBorder.classList.add("activeAvatar");
        } else {
            avatarBorder.classList.remove("activeAvatar");
        };
    };

    // logs out the user
    function logout() {
        setModalShow(false)
        setAuth(null);
        navigate("/", { replace: true });
    };

    // cancels logout and closes logout modal
    function cancelLogout() {
        setModalShow(false);
    };

    return (
        <Navbar expand="lg" >
            <Container>
                <Nav className="me-auto navLinks">
                    {auth ? (
                        <>
                            <NavLink to="postList"><img src="/images/logo/logo_main.png" alt="React logo Home button" className="home__logo" onClick={setAvatarActive} /></NavLink>
                            <div className="nav__icons__container">
                                <NavLink to="postList" onClick={setAvatarActive} onMouseEnter={() => setShowPostListHover(true)}
                                    onMouseLeave={() => setShowPostListHover(false)}><HiHome className="nav__icon icon__home" aria-label="post list" />
                                    {showPostListHover && (
                                        <div className="hover__container">
                                            <p>Post list</p>
                                        </div>
                                    )}</NavLink>
                                <NavLink to="profileList" onClick={setAvatarActive} onMouseEnter={() => setShowProfileListHover(true)}
                                    onMouseLeave={() => setShowProfileListHover(false)}><FaUsers className="nav__icon icon__profiles" aria-label="profile list" />
                                    {showProfileListHover && (
                                        <div className="hover__container">
                                            <p>Profile List</p>
                                        </div>
                                    )}</NavLink>
                                <div className="nav__profileImg__container" onMouseEnter={() => setShowUserHover(true)}
                                    onMouseLeave={() => setShowUserHover(false)} onKeyDown={(e) => e.key === "Enter" ? setNewUserUrl() : null} tabIndex='0'>
                                    <div className="avatar__img__border" onClick={setNewUserUrl} >
                                        <img src={auth.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : auth.avatar} alt="my profile" className="nav__icon avatar__img__small" id="nav__avatar" />
                                    </div>
                                    {showUserHover && (
                                        <div className="hover__container">
                                            <p>User profile</p>
                                        </div>
                                    )}
                                </div>
                                <div className="nav__logoutBtn__container">
                                    <RiLogoutBoxLine onClick={() => setModalShow(true)} onMouseEnter={() => setShowLogoutHover(true)}
                                        onMouseLeave={() => setShowLogoutHover(false)} className="nav__icon icon__logoutBtn" onKeyDown={(e) => e.key === "Enter" ? setModalShow(true) : setModalShow(false)} aria-label="logout" tabIndex='0' />
                                    {showLogoutHover && (
                                        <div className="hover__container">
                                            <p>Log out</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <ConfirmLogout
                                showModal={modalShow}
                                cancel={cancelLogout}
                                confirm={logout}
                            />
                        </>
                    ) : (
                        <NavLink to="/" end><img src="/images/logo/logo_main.png" alt="React logo, Home button" className="home__logo" /></NavLink>
                    )}
                </Nav>
            </Container>
        </Navbar >
    );
};