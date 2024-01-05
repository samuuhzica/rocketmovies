import { Container, Content } from "./styles";
import { FiArrowLeft, FiStar } from "react-icons/fi";
import { MovieReview } from "../../components/MovieReview";
import { Header } from "../../components/Header";

import { ButtonText } from "../../components/ButtonText";

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
     
    <MovieReview 
    title="Interestellar" >
      
          {
        Array.from({ length: 5 }, (_, index) => (
      <li key={index}>
        <FiStar  />
      </li>
    ))
    }
    </MovieReview>
     

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates, atque iste consequuntur doloribus recusandae necessitatibus nisi consectetur nesciunt, exercitationem quae maxime deserunt expedita enim mollitia amet facilis nemo sit.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa officia suscipit ex asperiores soluta dolorem vitae, dolores modi est recusandae nulla, eos accusantium ipsam atque itaque aliquid quod rerum? Vero.</p>

         </Content>
    </main>
    </Container>
  )
}