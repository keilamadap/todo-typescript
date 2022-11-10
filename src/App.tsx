import { useState } from 'react';
import * as C from './App.styles'
import './index.css';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {

  const [lista, setLista] = useState<Item[]>([
    { id: 1, name: 'Comprar pao', done: false },
    { id: 2, name: 'Comprar bolo e depois dormir bem muito', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...lista];
    newList.push({
      id: lista.length + 1,
      name: taskName,
      done: false,
    });
    setLista(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* ADD NOVA TAREFA */}

        <AddArea
          onEnter={handleAddTask}
        />

        {lista.map((item, index) => (
          <ListItem
            key={index}
            item={item}
          />
        ))}

      </C.Area>
    </C.Container>

  );
}

export default App;
