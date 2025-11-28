import Header from "./components/components/Header"
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Skills from "./components/pages/Skills"
import AboutMe from "./components/pages/AboutMe"
import Contacts from "./components/pages/Contacts"
import Footer from "./components/components/Footer"
import { ThemeProvider } from "./context/ThemeContext"

const App = () =>{


  return (
    <ThemeProvider>
      <div className="bg-background font-sans min-h-screen">
        <Header />
        <Home />
        <Projects />
        <Skills />
        <AboutMe />
        <Contacts />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
