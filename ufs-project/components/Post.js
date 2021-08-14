import { useEffect, useState } from "react"
import { DeletaPost } from "../context/DeletaPost"
import { PostBox, Text} from "./PostStyled"

export default function Post({post,user_id}) {
    const [valido,setValido] = useState(true)
    const data = new Date(post.created_at)

    async function handleDelet(){
        await DeletaPost(post)
        setValido(false)
    }

    if (valido){
        return (
            <PostBox>
                {post.user_id == user_id ? <div> <button onClick={e => handleDelet()}>Deletar</button></div> : <></>}
                <Text>
                    <h1>{post.title}</h1>
                    <h2>{post.description}</h2>
                </Text>
                <p>{data.toString()}</p>
                <div>
                    <p>img post</p>
                </div>
            </PostBox>
        )
    }    
    
    return <></>
}