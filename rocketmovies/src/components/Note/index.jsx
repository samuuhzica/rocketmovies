import { Container } from './styles'
import { Tags } from '../Tags'
import { Stars } from '../Stars'

export function Note({ data, ...rest}) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Stars rating={data.rating} /> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis illo fugit eaque consectetur, possimus itaque quam repellendus quisquam cupiditate dolore in repudiandae, sint odio deleniti aperiam quas alias commodi!lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus explicabo delectus cum. Amet esse soluta perspiciatis minima reprehenderit officia, tempore doloribus et nam quod quibusdam in molestiae velit, ratione odiolo.lor </p>
      {
        data.tags && (
        <footer>
          {
            data.tags.map((tag => <Tags key={tag.id} title={tag.name} />))
          }
        </footer>
     ) }
    </Container>
  )
}