import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";




const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState('');
  const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeConfirmEmail = (event) => {
    setConfirmEmail(event.target.value);
  };
 
  const sendData = () => {
    if (name.length < 10 || name.length > 30) {
      alert("Preencha o campo NOME corretamente.")}
      else if (age < 18) {
        alert("Você é menor de idade. Não pode se cadastrar.");
      } else if (email!==confirmEmail){
        alert('Email não confere.')
     } else {
        setFormFlow(2);
      }
  };
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          name={name}
          ChangeName={onChangeName}
          age={age}
          ChangeAge={onChangeAge}
          email={email}
          ChangeEmail={onChangeEmail}
          ConfirmEmail={confirmEmail}
          ChangeConfirmEmail={onChangeConfirmEmail}
          sendData={sendData}

          // insira aqui suas props
        />
      ) : (
        <ConfirmationForm />
      )}
    </MainContainer>
  );
};

export default MainPage;