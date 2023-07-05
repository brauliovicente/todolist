import styled from 'styled-components';

const Container=styled.div`
    width:30%;
    height:auto;
    background-color:#FFF;
    margin:5px;

    
    div.titulo{
        height:50px;
        padding:5px;
        font-family:trebuchet;
    }
    div.tarefas{
        width:100%;
        margin-bottom:20px;
    }

    div.group-input{
        width:400px;
        display:flex;
        justify-content:center;
        margin-top:10px;
    }

    div.group-input input{
        width:80%;
    }

    div.group-input button{
        background-color:hsl(139, 36%, 78%);;
        padding:4px;
        cursor:pointer;
        color:#FFF;
        border: 1px solid hsl(139, 36%, 78%);
    }
    div.form form button:hover{
        background-color:#FFF;
        color:hsl(139, 36%, 78%);
    }

    /*Para mobile */
    @media (max-width: 768px) {
        width:90%;

        div.group-input{
            margin:auto;
            font-size:.5px;
            width:200px;
            margin-top:10px;
            margin-bottom:10px;

        }
    }
`;

export default Container;