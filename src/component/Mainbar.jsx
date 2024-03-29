import React ,{useState} from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'


const Mainbar = ({hamburger}) => {
  const [Query, setQuery] = useState("");
  return (
    <div className='w-screen' style={{height:window.innerHeight +'px' ,overflow:'scroll' ,  overflowX: 'hidden' }} >
        <Navbar Query={Query} setQuery={setQuery}/>
        <Content Query={Query}/>
        <Footer/>
    </div>
  )
}

export default Mainbar