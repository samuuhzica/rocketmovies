import {FiPlus} from 'react-icons/fi';

import { Container, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { Note } from '../../components/Note';
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
      <main>
        
        <Content>
      <Note
      data={{
        title: 'Interestellar', 
        tags: [
          {id: '1', name:'Ficcao cientifica' },
          {id: '2', name:'Drama'},
          {id: '3', name:'Familia'}
        ]
      }} 
      />
     
      </Content>
      </main>
  
    </Container>
  

  )
}