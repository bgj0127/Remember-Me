import styled from 'styled-components';

export const Contanier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: "Jal_Onuel";
  background: #00F260;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0575E6, #00F260);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
`

export const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24%;
  height: 10%;
  font-size: 6vmin;
  background: #AAFFA9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #11FFBD, #AAFFA9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #11FFBD, #AAFFA9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;
`

export const Text = styled.p`
  font-size: 4vmin;
  padding: 1vmin;
  background: #AAFFA9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #11FFBD, #AAFFA9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #11FFBD, #AAFFA9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;
`

export const Input = styled.input`
  width: 9%;
  height: 4vh;
  margin-bottom: 0.5vh;
  padding: 0.3125rem;
  border: 2px solid white;
  outline: none;
  background: rgba(255,255,255,0.4);
  font-family: "Jal_Onuel";
  color: white;
`

export const Button = styled.button`
  width: 9%;
  height: 4vh; 
  background: none;
  color: white;
  border: 2px solid white;
  outline: none;
  font-family: "Jal_Onuel";
  font-size: 1.6vmin;
  transition: all ease-in 0.2s;

  :hover{
    background: white;
    color: #0575E6;
  }
`

