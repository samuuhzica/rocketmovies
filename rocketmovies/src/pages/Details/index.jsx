import { Container, Content } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return(
    <Container>
    <Header/>
    <main>
      <Content>

   
  
      <ButtonText 
      title="Voltar"
      icon={FiArrowLeft} />

      <h1> Interestellar </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates, atque iste consequuntur doloribus recusandae necessitatibus nisi consectetur nesciunt, exercitationem quae maxime deserunt expedita enim mollitia amet facilis nemo sit.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa officia suscipit ex asperiores soluta dolorem vitae, dolores modi est recusandae nulla, eos accusantium ipsam atque itaque aliquid quod rerum? Vero.</p>

      <Section title="Marcadores">
      <Tags title="React"/>

      
      </Section>
      <Button 
      title="Voltar"
      />
         </Content>
    </main>
    </Container>
  )
}