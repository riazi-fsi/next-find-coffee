import Banner from '../components/banner'

export default function Home() {
  const handleOnBannerClick=()=>{
    alert('test')
  }
  return (
    <>
    <main className='container'>
    
      <Banner buttonText={'view stores nearby'} handleOnClick={handleOnBannerClick} />
    </main>
    </>
  ) 
}
