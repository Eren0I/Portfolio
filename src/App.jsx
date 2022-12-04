import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Entry from './components/Entry'
import Social from './components/Social'
import BackgroundAnimation from './components/BackgroundAnimation'


function App() {


  return (
    <div className="App">
     <Navbar />
     <BackgroundAnimation/>
     <Entry />
     <Social/>
     <Projects />
    </div>
  )
}

export default App
