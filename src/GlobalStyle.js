import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    width:100%;
    background-color:hsl(139, 36%, 78%);
}
`;

export default GlobalStyle;