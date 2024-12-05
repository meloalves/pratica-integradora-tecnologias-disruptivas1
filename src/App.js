import React, { useState } from 'react';
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  // Estado para controlar a exibição da lista de tarefas
  const [showTasks, setShowTasks] = useState(true);

  // Função para alternar a exibição
  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="App">
      <Header />
      
      {/* Botão para alternar a exibição */}
      <button 
        onClick={toggleTasks} 
        style={{
          margin: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {showTasks ? 'Ocultar Tarefas' : 'Mostrar Tarefas'}
      </button>

      {/* Renderizar ListarTarefa com base no estado */}
      {showTasks && <ListarTarefa />}
    </div>
  );
}

export default App;
