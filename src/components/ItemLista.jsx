import React from "react";
import "./estilos.css";

export default function ItemLista(props) {
  return (
    <div className="boxSigno">
      <div className="nomeSigno">{props.signo}</div>
      <img className="imagemSigno" src={props.imagem} alt="" />
      <div className="periodoSigno">
        {props.dataInicio} - {props.dataFim}
      </div>
    </div>
  );
}
