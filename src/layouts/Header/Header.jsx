import logo from "../../assets/logo.png"
import style from "./header.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header className={style.headerContainer}>
            <Link to={`/Home`}><img className={style.logoImg} src={logo} alt="" /></Link>
            
            <div className={style.headerLinks}>
                <Link className={style.headerLink} to={`/Home`}>Sobre Nosotros</Link>
                <Link className={style.headerLink} to={`/Home`}>Planes</Link>
                <Link className={style.headerLink} to={`/Home`}>Contactos</Link>
            </div>
            <GiHamburgerMenu className={style.Hamburger} onClick={toggleMenu}></GiHamburgerMenu>
            <div className={`${style.mobileMenu} ${isMenuOpen ? style.active : ''}`}>
                <Link className={style.headerLink} to={`/Home`}>Sobre Nosotros</Link>
                <Link className={style.headerLink} to={`/Home`}>Planes</Link>
                <Link className={style.headerLink} to={`/Home`}>Contactos</Link>
                <Link className={style.headerButton} to={`/Login`}>Iniciar Sesion</Link>
            </div>

            <div className={style.headerLoginRegister}>
                <Link className={style.headerButton} to={`/Login`}>Iniciar Sesion</Link>
            </div>
        </header>
    );
}
export default Header