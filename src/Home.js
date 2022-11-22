import Carousel from './components/Carousel';
import ArrowRight from './components/Arrow';

function Home (){
    return(
        <div className="App container w-50">

      <h1> ¡¡BIENVENIDOS!!<br /> ESTA ES MI BIOGRAFIA </h1>
      <p>Hola mi nombre es scarlet alfaro
      
        <br />
        tengo 27 años
        <br />
        Tengo un hijo llamado demian.</p>
        <a className='link-danger' href='https://www.soymas.cl/'>quieres saber mas sobre la fundacion <ArrowRight /></a>
      <Carousel />
    </div>
    )
}
export default Home