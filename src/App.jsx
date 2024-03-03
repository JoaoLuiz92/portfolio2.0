import Nav from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Email from './components/email';
import Footer from './components/Footer';


function App() {
  return (
    <main >
       
              <Nav/>
        <div className="main-content">
              <About/>
              <Services/>
              <Clients/>
              <Contact/>
              <Email/>
              <Footer/>
        </div>
        <div style={{ height: '80px' }}></div>
   </main>
  )
}

export default App
