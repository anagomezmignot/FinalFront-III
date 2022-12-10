import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validarNombre = (value) => {
    return value ? value.length > 5 : false;
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSumbmitForm = (e) => {
    e.preventDefault();
    if (validarNombre(name) && /\S+@\S+\.\S+/.test(email)) {
      document.querySelector("#mensaje").innerHTML = "Thank you " +
      name +
      ", we'll contact you via email"
    } else {
      document.querySelector("#mensaje_error").innerHTML = "Please check your information again"
    }
  };

  return (
    <>
      <form onSubmit={onSumbmitForm}>
        <input
          id="input1"
          role= {"input1"}
          placeholder="Full name"
          value={name}
          onChange={onChangeName}
        />
        <input
          id="input2"
          role= {"input2"}
          placeholder="Email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <button type="submit" role={"button"}>Send</button>
      </form>
      <p id="mensaje_error"></p>
      <h3 id = "mensaje"> </h3>
    </>
  );
};

export default Form;

