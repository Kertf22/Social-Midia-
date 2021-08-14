import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import { parseCookies } from 'nookies'

export default function Home() {
  return (
    <>
      <Head>
        <title>Projeto UFS</title>
        <meta name="description" content="Projeto UFS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login></Login>
    </>
  )
}

export const getServerSideProps = async(ctx) => {
  const { 'ufsproject_token': token } = parseCookies(ctx)

  if (token){
    return {
      redirect: {
        destination:"/lobby",
        permanent:false
      }
    }
  }
  return {
      props: {

      }
  }
}