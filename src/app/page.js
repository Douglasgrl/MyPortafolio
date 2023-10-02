import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import Contact from "./components/Contact/Contact"
import Projects from "./components/Projects/Projects"
import Experiencies from "./components/Experiencies/Experiencies"

export default function Home() {
  return (
    <div className="bg-site overflow-hidden bg-cover bg-no-repeat">
      <Header/>
      <Banner/>
      <Nav/>
      <About/>
      <Experiencies/>
      <Projects/>
      <Contact/>
    </div>
  )
}
