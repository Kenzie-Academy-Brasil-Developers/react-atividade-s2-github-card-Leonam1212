import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useState } from "react"
import axios from "axios"
import { CgSearch } from "react-icons/cg"
import {ContainerForm} from "./style"
const Form = ({setValueInput,state}) => {

    const [erro, setErro] = useState(false)
    const schema = yup.object().shape({
        inputSeach: yup.string().required("Preencha o campo a cima")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {   
        axios.get(`https://api.github.com/repos/${data.inputSeach}`)
        
        .then((response) => {
            setValueInput([...state, response.data])
            setErro(false)
        })
        .catch((e) =>  setErro(!erro) )
    } 

    // .then ((response) => response.owner.avatar_url && response)
    
    return (
        <ContainerForm className = "form" onSubmit = {handleSubmit(onSubmitFunction)} >
            <div >
                <h1>GITHUB CARDS</h1>
                <input type= "text" {...register("inputSeach")} required />
                <span> Digite o nome do repositório</span>
                    <p>

                        {erro && "Repositório inexistente"}
                        {errors.inputSeach?.message}
                    </p>
                <button type = "submit">Search</button>
            </div>
 
        </ContainerForm>
    )

}
export default Form