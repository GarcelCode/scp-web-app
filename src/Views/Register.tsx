import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../Components/Form";
import { FormButton } from "../Components/FormButton";
import { FormInputRow } from "../Components/FormInputRow";
import { authContext } from "../Contexts/Auth";

export function Register () {
    const authValue = useContext(authContext);
    const navigate = useNavigate();
    
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState<string|undefined>()

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setInputData({...inputData, [e.target.name]:value})
    }

    const handleRegister = async (e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault();
        setError("");
        try{
            await authValue.signup(inputData.email, inputData.password);
            navigate('/app');
        }catch (error:any){
            if(error.code === "auth/invalid-email"){
                setError("Invalid E-mail")
            }else if(error.code === "auth/missing-email"){
                setError("Missing E-email")
            }else if(error.code === "auth/internal-error"){
                setError("Missing Password")
            }else if(error.code === "auth/weak-password"){
                setError("Password must have at least 6 characters")
            }else if(error.code === "auth/email-already-in-use"){
                setError("Email already in use")
            }
        }
        
    }

    return (
        <>
            <div className="h-screen bg-slate-700 flex justify-center items-center">
                <Form>
                    <h1 className="text-gray-800 text-3xl text-center font-bold pb-3 md:text-5xl">Registrar</h1>
                    <FormInputRow text="Correo" type="email" name="email" action={handleChange}/>
                    <FormInputRow text="Contraseña" type="password" name="password" action={handleChange}/>
                    <label className="text-center text-red-500">{error && <p>{error}</p>}</label>
                    <FormButton text="Crear Cuenta" color="bg-green-500" action={handleRegister} />
                    <label className="mt-2 text-center text-sm">¿Ya tienes una cuenta? <a href="/login" className="cursor-pointer text-blue-700 underline">Inicia Sesión</a></label>
                </Form>
            </div>
        </>
        
    );
}
