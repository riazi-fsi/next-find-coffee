
function banner(props) {
  return (
    <div>
         
          <h1 className='text-left mt-7 font-bold text-6xl text-white m-4 '>Coffee<span className='text-cyan-700'>  Connoisseur </span></h1>
          <p className="m-4 font-bold">Discover your local coffee shops!</p>
          <button className="bg-sky-800 text-white p-2 m-4 " onClick={props.handleOnClick}> {props.buttonText}</button>
    </div>
  )
}

export default banner