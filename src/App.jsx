import Nav from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import { ProjectList } from './components/Clients';
import Email from './components/email';
import Footer from './components/Footer';
import Services from './components/Services';



function App() {
  return (
    <main style={{background:'rgb(5, 8, 22)'}} >
       
              <Nav/>
        <div className="main-content">
              <About/>
              <ProjectList/>
              <Services/>
              <Contact/>
              <Email/>
              <Footer/>
        </div>
        <div style={{ height: '80px' }}></div>
   </main>
  )
}

export default App
