import React from "react";

const Sessao = ({cor,texto,classe,children})=> {
  return (
    <section>
      <p style={{ backgroundColor: cor }} className={classe}>
        {texto},{children}
      </p>
    </section>
  );
}

export default Sessao;
