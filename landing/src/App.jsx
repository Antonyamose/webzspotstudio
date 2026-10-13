import Brand from "./components/Brand"
import Choose from "./components/Choose"
import Header from "./components/Header"
import Price from "./components/Price"
import Services from "./components/Services"
import Works from "./components/Works"
import Testimonials from "./components/Testimonials"
// import Stats from "./components/Stats"
import Features from "./components/Features"
import FAQs from "./components/FAQs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Ai from "./components/Ai"
import Subclient from "./components/Subclient"


function App() {


  return (
    <div >
      <section id="header"><Header /></section>
      
      <section id="features"><Features/></section>
      <section id="brand"><Brand /></section>
      <section id="choose"><Choose /></section>
      <section id="services"><Services /></section>
      <Subclient />
      <section id="testimonials"><Testimonials/></section>
      <section id="price"><Price /></section>
      <section id="works"><Works/></section>
      <section id="ai"><Ai /></section>
      <section id="faq"><FAQs/></section>
      <section id="contact"><Contact/></section>
      <section id="footer"><Footer/></section>
    </div>
  )
}

export default App


