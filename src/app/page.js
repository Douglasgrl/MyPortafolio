import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import Projects from "./components/Projects/Projects"

export default function Home() {
  return (
    <div className="bg-site overflow-hidden bg-cover bg-no-repeat">
      <Header/>
      <Banner/>
      <Nav/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <div className="h-[4000px]"></div>
    </div>
  )
}
