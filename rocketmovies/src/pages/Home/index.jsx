import {FiPlus} from 'react-icons/fi';

import { Container, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
export function Home() {

  return(
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
      <NewNote>
        
        <FiPlus/>
        Adicionar filme
      </NewNote>
      </div>
     
      <Content>
     
      </Content>
  
    </Container>
  

  )
}