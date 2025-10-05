import { GoBook } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import style from "./features.module.css"
const Features =()=>{
    return(
        <section className={style.containerFeatures}>
            <h2>Por que elegir Nuestra Academia?</h2>
            <div className={style.containerFeature} >
                <div className={style.feature}>
                    <GoBook className={style.Icon}></GoBook>
                    <h3>Cursos Especializados</h3>
                    <p>Algebra,Aritmetica,Fisica,Quimica etc , mas materiales para tu preparacion</p>
                </div>
                <div className={style.feature}>
                    <GoClock className={style.Icon}></GoClock>
                    <h3>Horario Flexible</h3>
                    <p>Clases matutinas, vespertinas y sabatinas para adaptarse a tu tiempo</p>
                </div>
                <div className={style.feature}>
                    <GoTrophy className={style.Icon}></GoTrophy>
                    <h3>Alto indice de ingreso</h3>
                    <p>95% de nuestros estudiantes logran ingresar a la universidad</p>
                </div>
            </div>
        </section>
    );
}
export default Features