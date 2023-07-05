import React, { useState, useEffect } from 'react';
import Container from '../Card/style';

const Card = ({ title, btnTitle = '0k', tarefas, status }) => {
  const [dados, setDados] = useState([]);

  function returnIndex(vector, id) {
    for (var i = 0; i < vector.length; i++) {
      if (vector[i] != null && vector[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  function retornaJSON(vector, id) {
    for (var i = 0; i < vector.length; i++) {
      if (vector[i] != null && vector[i].id === id) {
        return vector[i];
      }
    }
  }

  function onClickPrev(id) {
    let objTarefa = retornaJSON(tarefas, id);
    objTarefa.status = objTarefa.status - 1;
    const updatedTarefas = [...tarefas];
    updatedTarefas[returnIndex(tarefas, id)] = objTarefa;
    localStorage.setItem('tarefas',JSON.stringify(updatedTarefas));
  }

  function onClickNext(id) {
    let objTarefa = retornaJSON(tarefas, id);
    objTarefa.status = objTarefa.status + 1;
    const updatedTarefas = [...tarefas];
    updatedTarefas[returnIndex(tarefas, id)] = objTarefa;
    localStorage.setItem('tarefas',JSON.stringify(updatedTarefas));
  }

  useEffect(() => {
    const filteredDados = tarefas.filter((dado) => dado.status === status);
    setDados(filteredDados);
  }, [tarefas, status]);

  return (
    <Container>
      <div className='titulo'>
        {title}
      </div>
      <hr />

      <div className='tarefas'>
        {dados && dados.length === 0 && (
          <div className='group-input'>
            <p>Não há tarefas disponíveis</p>
          </div>
        )}
        {dados.length > 0 &&
          dados.map((tarefa) => (
            <div className='group-input' key={tarefa.id}>
              <button className='btn' onClick={() => onClickPrev(tarefa.id)}>
                x
              </button>
              <textarea disabled defaultValue={tarefa.text} rows={3} cols={40}></textarea>
              <button className='btn' onClick={() => onClickNext(tarefa.id)}>
                {btnTitle}
              </button>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Card;
