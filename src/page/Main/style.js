import styled from 'styled-components';

const Container=styled.main`

    div.form{
        width:50%;
        height:100px;
        background-color:#FFF;
        margin:auto;
        margin-top:50px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-radius:10px;   
    }
    div.form form{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:10px;
    }
    div.form form input{
        width:70%;
        padding:8px;
        border: 1px solid hsl(139, 36%, 78%);
    }
    div.form form button{
        background-color:hsl(139, 36%, 78%);;
        padding:8px;
        cursor:pointer;
        color:#FFF;
        border: 1px solid hsl(139, 36%, 78%);
    }
    div.form form button:hover{
        background-color:#FFF;
        color:hsl(139, 36%, 78%);
    }

    .cards{
        width:100%;
        margin:auto;
        margin-top:40px;
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        
    }

        /*Para mobile */
        @media (max-width: 768px) {
            div.form{
            width:90%; 
        }

        
    }
`;

export default Container;