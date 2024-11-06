import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Carousel from './components/Carousel';
import Object from './components/Object.jsx';
import Catalogue from './components/catalogue.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const images = [
    'https://img.freepik.com/fotos-premium/banner-escaparate-joyeria-bisuteria-disenador-ai-generativo-apariencia-moderna_753390-6055.jpg?w=1380',
    'https://img.freepik.com/fotos-premium/llamativa-fotografia-colgante-dorado-premium-ia-generativa-piedra-real_753390-6377.jpg',
    'https://img.freepik.com/fotos-premium/premium-disenador-colgante-joyeria-estandarte-momentos-especiales-generativo-ai_753390-4870.jpg',
  ];

  return (
    <>
    <Navbar/>
    <Carousel images={images} />
    <div className='objectParent'>
      <h3 className='objectName'>DESTACADOS DEL MES</h3>
    </div>

    <div className='objectList'>
      <Object producto='Candongas & Earcuffs de flores' precio='$43.000 COP'/>
      <Object producto='Collares & Pulseras de perlas' precio='$38.000 COP'/>
      <Object producto='Gargantillas & Pendientes de mariposa' precio='$55.000 COP'/>
      <Object producto='Brazaletes & Pendientes de cristal' precio='$50.000 COP '/>
    </div>

    <Catalogue/>

    <Footer/>

    </>
  )
}

export default App
