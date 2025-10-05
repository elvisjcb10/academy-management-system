import {useForm} from "react-hook-form"
import style from './register.module.css'
import { IoPerson } from "react-icons/io5";
import { HiIdentification } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { useState } from "react";

const Register=()=>{
    const [verContraseña,setVerContraseña]=useState(true);
    const [verConfirmarContraseña,setVerConfirmarContraseña]=useState(true);
    const {register,handleSubmit}=useForm();
    //Funcion para ver la contraseña como tenemos 2 campos que es el contraseña 
    // y confirmar contraseña usamos una funcion para los 2 donde si a la funcion le
    //pasamos el atributo "verContraseña"  entonces cambia el estado al contrario que tenia
    // asi para q pase de True a false 
    const handleVerContraseña=(ver)=>{
        if(ver==="verContraseña") setVerContraseña(!verContraseña);
        else setVerConfirmarContraseña(!verConfirmarContraseña)
    }
    
    const onSubmit=handleSubmit((data)=>{
        console.log(data);
    })
    return(
        <section className={style.containerRegister} >
            <form onSubmit={onSubmit} className={style.containerForm} >
                <div className={style.containerInput}>
                    <input type="text"   placeholder="Nombres"
                    {...register("nombre",{})}/>
                    <IoPerson  className={style.Icon}/>

                </div>
                <div className={style.containerInput}>
                    <input type="text"  placeholder="Apellidos" {...register("apellidos")}/>
                    <IoPerson  className={style.Icon}/>
                </div>
                <div className={style.containerInput}>
                    <input type="text"  placeholder="DNI" {...register("dni")}/>
                    <HiIdentification  className={style.Icon} />

                </div>
                <div className={style.containerInput}>
                    <input type="email"   placeholder="Email" {...register("email")}/>
                    <MdEmail className={style.Icon}  />

                </div>
                <div className={style.containerInput}>
                    <input id="hola" type={!verContraseña?"text":"password"}   placeholder="Contraseña" {...register("contraseña",{    
                    })}/> 
                    {/*Aca usamos la funcion cuando le da click al icono cambia de de estado y por lo tanto de icono */}
                    {!verContraseña?<LuEye className={style.Icon} onClick={() =>handleVerContraseña("verContraseña") } />:
                        <LuEyeClosed className={style.Icon} onClick={() => handleVerContraseña("verContraseña")} ></LuEyeClosed>}
                </div>
                <div className={style.containerInput}>
                    <input type={!verConfirmarContraseña?"text":"password"}  placeholder="Confirmar Contraseña" {...register("confirmarContraseña")}/>
                    {/*Aca usamos la funcion cuando le da click al icono cambia de de estado y por lo tanto de icono 
                     sim embargo aca no le pasamo ningun parametro ya que en la funcion si el parametro toma cualquier
                     valor diferente a "vercontraseña lo atribuye al estado verConfirmarContraseña*/}
                    {!verConfirmarContraseña?<LuEye className={style.Icon} onClick={handleVerContraseña} />:
                        <LuEyeClosed className={style.Icon} onClick={handleVerContraseña} ></LuEyeClosed>}
                </div>
                <button>Registrarse</button>
            </form>
        </section>
    );
}
export default Register