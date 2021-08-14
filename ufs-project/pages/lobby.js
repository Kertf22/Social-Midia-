import Head from 'next/head'
import Lobby from '../components/Lobby'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { getAPIClient } from '../services/axios'

export default function LobbyPage(props) {


    return (
      <>
        <Head>
          <title>Projeto UFS</title>
          <meta name="description" content="Projeto UFS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Lobby {...props} ></Lobby>
      </>
    )
  }

export const getServerSideProps = async(ctx) => {
    const apiClient = getAPIClient(ctx)

    const { 'ufsproject_token': token } = parseCookies(ctx)

    if (!token){
      return {
        redirect: {
          destination:"/",
          permanent:false
        }
      }
    }

    const { data } = await axios.get("http://localhost:3333" + "/posts",{
      headers: { Authorization: `Bearer ${token}` 
    }})

    return {
        props: {
          posts: data
        }
    }
}