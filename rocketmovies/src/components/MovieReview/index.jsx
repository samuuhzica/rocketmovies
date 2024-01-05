import { Container, Rating } from "./styles";
import { FiStar} from 'react-icons/fi'

export function MovieReview({title, children}) {
  return(
    <Container>
      <h1>{title}</h1>
     {children}
    </Container>
  )
}
