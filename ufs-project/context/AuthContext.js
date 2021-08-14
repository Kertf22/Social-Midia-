import axios from "axios"
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies"
import  Router  from "next/router";
import jwt_decode from "jwt-decode";
import { api } from "../services/api";
 


export const AuthContext = createContext({})

export function AuthProvider({children}){

    const [user, setUser] = useState();

    const isAuthenticated = !!user;
    const url = "http://localhost:3333"
    useEffect(async () => {
        const { 'ufsproject_token': token } = parseCookies()

        if (token){
            setTimeout(() =>{},750)
            const { data } = await axios.get( url + "/user", {
                headers: { Authorization: `Bearer ${token}` }
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}` ;

            setUser({...data})
        }

    }, [])

    async function singIn({name,password}){
       const { data } = await axios.post(url + "/user/login", {
        name,
        password
      })

      const { imgUrl } = jwt_decode(data);

      setCookie(undefined, 'ufsproject_token', data,{
          maxAge: 60* 60* 24 // 1 dia
      } )

      setUser({name,imgUrl})

      Router.push("/lobby")
    }

    async function singUp({name,password,imgUrl}){
        const { data } = await axios.post(url + "/user", {
         name,
         password,
         imgUrl
       })
 
       setCookie(undefined, 'ufsproject_token', data,{
           maxAge: 60* 60* 24 // 1 dia
       } )
 
       setUser({name,imgUrl})
 
       Router.push("/lobby")
     }
    return (
        <AuthContext.Provider value={{ user,isAuthenticated,singIn,singUp }}>
            {children}
        </AuthContext.Provider>
    )
}