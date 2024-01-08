import { Container } from './styles'
import { FaStar} from 'react-icons/fa'
import { FiStar} from 'react-icons/fi'

export function Stars({ ratings }){
  return(
    <Container >

      {ratings >= 1 ? <FaStar/> : <FiStar/>}
      {ratings >= 2 ? <FaStar/> : <FiStar/>}
      {ratings >= 3 ? <FaStar/> : <FiStar/>}
      {ratings >= 4 ? <FaStar/> : <FiStar/>}
      {ratings >= 5 ? <FaStar/> : <FiStar/>}
    </Container>
  )
}