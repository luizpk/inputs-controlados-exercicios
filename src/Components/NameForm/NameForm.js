import React from "react";
import { Form, Input } from "../MainPage/styles";

const NameForm = (props) => {
  return (
    <Form>
      <label>
        Nome:
        <Input minlength='10' maxlenght='30' placeholder="Nome" value={props.name} onChange={props.ChangeName} />
      </label>
      <label>
        Idade:
        <Input placeholder="Idade" value={props.age} onChange={props.ChangeAge} />
      </label>
      <label>
        E-mail:
        <Input type='email'
          placeholder="usuario@usuario.com"
          value={props.email}
          onChange={props.ChangeEmail}
        />
      </label>
      <label>
        Confirmação de e-mail:
        <Input
          placeholder="usuario@usuario.com"
          value={props.ConfirmEmail}
          onChange={props.ChangeConfirmEmail}
        />
      </label>
      <button onClick={props.sendData}>Enviar dados</button>
    </Form>
  );
};

export default NameForm;