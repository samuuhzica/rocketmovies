import { Container, Header, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile(){
  return(
    <Container>
      <Header>
      <ButtonText
      title="Voltar"
      icon={FiArrowLeft}
      />
      </Header>
      <Form>
        <Avatar>
          <img
          src="https://github.com/samuuhzica.png"
          alt="Foto do usuario"
          />
          <label htmlFor="avatar">
            <FiCamera/>
          <input 
          id="avatar"
          type="file" 
          />
          </label>
        </Avatar>

      <Input
      placeholder="Nome"
      type="text"
      icon={FiUser}
      />
      <Input
      placeholder="Email"
      type="text"
      icon={FiMail}
      />
      <Input
      placeholder="Senha atual"
      type="password"
      icon={FiLock}
      />
      <Input
      placeholder="Nova senha"
      type="password"
      icon={FiLock}
      />
      <Button title="Salvar" />
      </Form>
    </Container>
  )
}