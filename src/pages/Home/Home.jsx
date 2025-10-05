import Header from "../../layouts/Header/Header";
import { Link } from "react-router-dom";
import style from "./home.module.css"
import imgPersona from "../../assets/persona-hero.png"
import Features from "../../layouts/Features/Features";
const Home =()=>{
    return(
        <>
            <main className={style.containerMain}>
                <div className={style.containerTitle}>
                    <h1>Quieres Ingresar a la Universidad</h1>
                    <Link  className={style.Comienza} to={"/Register"}>Comienza aqui</Link>
                </div>
                <img src={imgPersona} className={style.imgPerson} alt="" />
                <Features></Features>
            </main>
        </>
    );
}
export default Home