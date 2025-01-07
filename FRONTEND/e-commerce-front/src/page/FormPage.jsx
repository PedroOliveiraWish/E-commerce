import React, { useState } from "react";
import Login from "../component/Form/Login";
import Sign from "../component/Form/Signin";

function Form() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      {isLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Sign toggleForm={toggleForm} />
      )}
    </>
  );
}

export default Form;