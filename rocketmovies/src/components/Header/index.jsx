import { Container, Profile } from "./styles";

export function Header(){
  return(
    <Container>
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