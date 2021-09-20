import {Card} from "./style"

const Cards = ({repositories}) => {

    return (
        <>
            {
                repositories.map((element,index)=>(
                    <Card key = {index}>
                        <img src = {element.owner.avatar_url}/>
                        <div>
                            <span><strong>{element.full_name}</strong></span>
                            <span>{element.description}</span>
                        </div>

                    </Card>
                ))
            }
        </>
    )
}

export default  Cards

