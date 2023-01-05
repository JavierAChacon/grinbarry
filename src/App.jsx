import './App.css'

function App() {


  return (
    <div className="App">
      <div className='loader'>
          <h1>Loading</h1>
          <div className='dots'>
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
          </div>
      </div>

      <div className='socialMedia'>
        <a href="https://www.instagram.com/gr1nbarry/"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://facebook.com/grinbarry"><i className="fa-brands fa-facebook-f"></i></a>
      </div>
    </div>
  )
}

export default App
