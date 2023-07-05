import {useState, useEffect} from 'react';
import Container from '../Main/style';
import Card from '../../components/Card/index';

const Main = () =>{
    const [tarefas, setTarefas] = useState([{}]);
    const [tarefa, setTarefa] = useState({
        id:0,
        text:"",
        status:0,
    });
    const [id, setId] = useState(0);
    useEffect(()=>{
        const localTarefas = JSON.parse(localStorage.getItem('tarefas'));
        if (localTarefas != null && localTarefas.length > 0){
            setTarefas(localTarefas);
        }
        console.log(tarefas);
        
    },[tarefas]);

    useEffect(()=>{
        if(id===0){
            setId(id+1);
        }
        
    },[id]);


    function handleOnChange(e){
        setTarefa({id:id,text:e.target.value, status:1});   
    }

    function handleOnSubmit(e){
        e.preventDefault();
        setTarefas([...tarefas, tarefa]);
        localStorage.setItem('tarefas',JSON.stringify([...tarefas, tarefa])); 
        setId(id+1); 
    }

   
    
return(
    <Container>
        <div className="form">
            <div>Adicionar tarefa</div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="do" onChange={handleOnChange} placeholder='Adicionar uma tarefa'/>
                <button type="submit">+</button>
            </form>
        </div>

        <div className="cards">
            <Card title={"Por fazer"} btnTitle={"start"} tarefas={tarefas} status={1}/>
            <Card title={"A fazer"} btnTitle={"done"}  tarefas={tarefas} status={2}/>
            <Card title={"Feito"} btnTitle={"finish"} tarefas={tarefas} status={3}/>
        </div>
    </Container>
    );
}

export default Main;