import { Container, Content } from "./styles";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Stars } from "../../components/Stars";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
export function Details() {
  return(
    <Container>
    <Header/>
    <main>
      <Content>
  
      <ButtonText 
      className="return-button"
      title="Voltar"
      icon={FiArrowLeft} />

<div>
     <h1>Interestellar</h1>
    <Stars/>

    </div>

    <span>
      <img src="https://github.com/samuuhzica.png" alt="Foto do usuario" />
      <p>Por Samuuh Freitas</p>
    
      <FiClock/>
      <p>23/05/2022 as 08:00</p>
    </span>

    <Section>
    LIsta de Tags
    </Section>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates, atque iste consequuntur doloribus recusandae necessitatibus nisi consectetur nesciunt, exercitationem quae maxime deserunt expedita enim mollitia amet facilis nemo sit.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa officia suscipit ex asperiores soluta dolorem vitae, dolores modi est recusandae nulla, eos accusantium ipsam atque itaque aliquid quod rerum? Vero.</p>


         </Content>
    </main>
    </Container>
  )
}