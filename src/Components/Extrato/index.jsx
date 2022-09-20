import React from "react";
import { extratoLista } from "../../info";
import { Box, Button } from "../UI";

import Items from "../Items";

export default function Extrato() {
  return (
    <Box>
      {extratoLista.updates.map((item) => (
        <Items
          key={item.id}
          type={item.type}
          from={item.from}
          value={item.value}
          date={item.date}
        />
      ))}
      <Button>Ver Mais</Button>
    </Box>
  );
}
