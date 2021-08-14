
import { Main,Info, Posts } from "./LobbyStyle"
import Post from "./Post"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { api } from "../services/api"
import Link from "next/link"
import {Nav} from "./Nav"

export default function Lobby({posts}) {
    // Para ter apenas os post do usuário
    const [exclusivo,setExclusivo] = useState(false)

    const { user } = useContext(AuthContext)

    function handleExlcusivos(e){
        setExclusivo(e)
    }
    
    useEffect(() => {
      api.get('/user')
    })

    return (
        <Main>
            <Nav>
                <ul>
                <li onClick={e => handleExlcusivos(false)}>Todos os post</li>
                <li onClick={e => handleExlcusivos(true)}>Meus posts</li>
                <li><Link href="/create">Crie seu Post</Link></li>
                </ul>
                <Info>
                    <h1>{user?.name}</h1>
                </Info>
            </Nav>
            <Posts>
                {
                    // Lógica de exclusão 
                    posts.map(post => (
                    exclusivo == false 
                        ? <Post post={post} user_id={user?._id}/>
                        : post.user_id == user?._id 
                                ? <Post post={post} user_id={user?._id}/> 
                                : <></>
                    )
                )}
            </Posts>
        </Main>
    )
}
        

