import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Container, Form } from "./styles";


export function New(){
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <a href="/">voltar</a>
            <h1>Novo filme</h1>
          </header>
    <div>
          <Input placeholder="Titulo" />
          <Input placeholder="Sua nota (de 0 a 5)" />

    </div>

    <Textarea
    placeholder="Observações" 
    value=" " >

    </Textarea>

    <Section title="Marcadores" >
    <div className="tags">

    <NoteItem 
    value="React"
    placeholder="React"

     />
    <NoteItem 
    value="Novo marcador"
    placeholder="Novo Marcador" />
    </div>
    </Section>
    
    <div>
    <Button 
    className="button-delete"
    title="Excluir filme" />
    <Button
    className="button-add"
     title="Salvar alterações" />
    </div>

    
        </Form>
      </main>
    </Container>
  )
}