import { FiSearch } from "react-icons/fi";
import { Container, Profile } from "./styles";
import { Input } from '../Input'

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar por título"  icon={FiSearch}/>
      <Profile>
        <img src="https://github.com/samuuhzica.png"
             alt="Foto do usuario"/>

            <div>
              <strong>Samuuh Freitas</strong>
              <span>sair</span>
            </div>
      </Profile>
    </Container>
  )
}