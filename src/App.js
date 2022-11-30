import Navbar from './Componentes/nav';
import ContenidoP from './Componentes/contenidoP';
import Footer from './Componentes/footer';
import ListaOrden from './Componentes/listaOrden';




import './App.css';

function App() {
  return (
    <div className="App">
   
      <Navbar/>
      <ContenidoP
      titulo1='Información de los paguetes'
      titulo2='Servicio'
      titulo3='Quienes somos'
      titulo4='Contactanos'
      texto1='Te brindamos el mejor servicio para tus envios.'
      texto3='Con mas 10 años en el mercado, haciendo felices a nuestros clientes.'
      texto4='Siguenos en nuestras redes sociales o manda tus datos a nuestros correos.'
      />
    
    <ListaOrden/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
