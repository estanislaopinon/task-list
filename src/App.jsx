import { useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListadoRequerimientos } from './components/ListadoRequerimientos';
import './App.css';

function App() {

  const [requerimientos, setRequerimientos] = useState([]);

  // Función para eliminar un requerimiento
  const eliminarRequerimiento = (proyecto) => {
    const requerimientosActualizados = requerimientos.filter(requerimiento => requerimiento.proyecto !== proyecto);
    setRequerimientos(requerimientosActualizados); // Actualiza el estado
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className='mt-12 flex'>
        <Formulario
          requerimientos={requerimientos}
          setRequerimientos={setRequerimientos}
        />
        <ListadoRequerimientos
          requerimientos={requerimientos}
          eliminarRequerimiento={eliminarRequerimiento} // Pasamos la función de eliminar
        />
      </div>
    </div>
  );
}

export default App;
