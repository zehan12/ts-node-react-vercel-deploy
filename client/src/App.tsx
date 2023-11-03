import './App.css';

function App() {
  return (
    <>
      <div className="effects">
        <div className="effect-holder">
          <div className="dropdown-style">
            <img src="/vite.svg" alt=""/>
              <span>TypeScript Deploy</span>
          </div>
        </div>
        <div className="effect-holder dark">
          <div className="dropdown-style black">
            <img src="/vite.svg" alt=""/>
              <span>Node React</span>
          </div>
        </div>
        <div className="effect-holder">
          <div className="dropdown-style black">
            <img src="/vite.svg" alt=""/>
              <span>FullStack Vercel</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
