import { Container } from './styles'
import { Tags } from '../Tags'
import { MovieReview } from '../MovieReview'

export function Note({ data, ...rest}) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
    <MovieReview />
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}