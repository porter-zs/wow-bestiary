

import '../assets/styles/App.css'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Seachbar'

function App() {

  return (
    <>
      <Navbar />
      <section className="content-section">
        <span className={`${"content-section-header"} ${"bold-text"}`}>Welcome to the World of Warcraft Bestiary Search Engine</span>
        <span>Enter a creature or item name below to get started!</span>
        <Searchbar />
      </section>
    </>
  )
}

export default App
