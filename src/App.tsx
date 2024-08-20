import Header from "./components/components/Header"
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Skills from "./components/pages/Skills"
import AboutMe from "./components/pages/AboutMe"
import Contacts from "./components/pages/Contacts"
import Footer from "./components/components/Footer"

const App = () =>{


  return (
    <div className="bg-background font-sans">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
