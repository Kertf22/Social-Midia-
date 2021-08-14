import Head from 'next/head'
import Image from 'next/image'
import Cadastro from '../components/Cadastro'
import { parseCookies } from 'nookies'

export default function CadastroPage() {
    return (
      <>
        <Head>
          <title>Projeto UFS</title>
          <meta name="description" content="Projeto UFS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Cadastro>

        </Cadastro>
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