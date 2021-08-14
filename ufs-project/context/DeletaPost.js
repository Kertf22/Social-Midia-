import axios from "axios";
import { parseCookies } from "nookies";

export async function DeletaPost(post){
    const { 'ufsproject_token': token } = parseCookies()  

    const delet = await axios.delete("http://localhost:3333/user/post", {
        headers: { Authorization: `Bearer ${token}` },
        data: {
            post_id:post._id
        }
    }) 

}