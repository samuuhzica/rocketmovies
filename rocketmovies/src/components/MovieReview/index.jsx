import { Container, Rating } from "./styles";
import { FiStar} from 'react-icons/fi'

export function MovieReview({title}) {
  return(
    <Container>
      <span>
      <h1>{title}</h1>
      <Rating>
      {
      Array.from({ length: 5 }, (_, index) => (
            <li key={index}>
              <FiStar  />
            </li>
          ))
          }
      </Rating>

      </span>
    </Container>
  )
}