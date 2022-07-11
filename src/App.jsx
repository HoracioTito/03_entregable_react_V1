import { useState } from 'react'
import './components/css/style.css'
import SearchBox from './components/SearchBox'

function App() {

 /* Box Search */
 const arrImg=[ 'banner_01.gif','banner_04.gif', 'banner_02.gif','banner_03.gif','banner_05.gif', ]
 const [urlImg , setUrlImg] = useState(arrImg[Math.floor(Math.random() * 3)])
 const [urlTv , setUrlTv] = useState(arrImg[Math.floor(Math.random() * 5)])

  return (
    <div className="App">
      <div >
        <div className='banner' style={{backgroundImage: `url(src/image/${urlImg})` }} >
        <div className='tv' style={{backgroundImage: `url(src/image/${urlTv})` }} ></div>

        </div>
        
        <div className='content'>
          <h1>Rick And Morty</h1>

          <SearchBox />
        </div>
      </div>
      <div className="footer-color ">
        <div className="my-info">
            <h2 className="ecommers">Rick and Morty</h2>
            <h4>Horacio Choque</h4>
            <h5>Hecho en Academlo</h5>
            <br/>
        </div>  
      </div>

    </div>
  )
}

export default App
