import { Navbar } from "@/layout/Navbar"
import { About } from "@/layout/section/About"
import { Contact } from "@/layout/section/Contact"
import { Experience } from "@/layout/section/Experience"
import { Hero } from "@/layout/section/Hero"
import { Projects } from "@/layout/section/Projects"
import { Tastimonials } from "@/layout/section/Tastimonials"

function App() {
 
  return (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Tastimonials />
      <Contact />
    </main>
  </div>
  )
}

export default App
