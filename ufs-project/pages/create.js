import Head from 'next/head'
import CriarPost  from '../components/CriarPost'

export default function LobbyPage(props) {

    return (
      <>
        <Head>
          <title>Projeto UFS</title>
          <meta name="description" content="Projeto UFS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CriarPost></CriarPost>
      </>
    )
  }