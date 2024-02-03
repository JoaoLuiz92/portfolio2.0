import Nav from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Clients from './components/Clients';



function App() {
  return (
    <main className=' bg-red-700'>
       
        <div>
          <Nav/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Services/>
        </div>
        <div>
          <Clients/>
        </div>
        <div>
          <Contact/>
        </div>

   </main>
  )
}

export default App
