import Head from 'next/head'
import Banner from '../components/banner'

export default function Home() {
  const handleOnBannerClick=()=>{
    alert('test')
  }
  return (
    <>
    <main className='container'>
    <Head>
      <title>search coffee</title>

    </Head>
      <Banner buttonText={'view stores nearby'} handleOnClick={handleOnBannerClick} />
    </main>
    </>
  ) 
}
