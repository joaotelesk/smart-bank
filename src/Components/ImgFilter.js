import React from "react";

import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { Icone } from "./UI";
export default function (type) {
  const Imagens = {
    Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
    Utilidades: <Icone src={utilidades} alt="Utilidades" />,
    Saude: <Icone src={saude} alt="Saude" />,
    Transporte: <Icone src={transporte} alt="Transporte" />,
    default: <Icone src={outros} alt="Outros" />,
  };
  return Imagens[type] || Imagens.default;
}
