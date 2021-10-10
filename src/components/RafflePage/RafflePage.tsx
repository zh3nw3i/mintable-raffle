import React from "react";
import { Grid } from "@mui/material";
import TicketsDrag from "../TicketsDrag/TicketsDrag";
import TicketDrop from "../TicketDrop/TicketDrop";

export default function RafflePage(): JSX.Element {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3} style={{ padding: "2em" }}>
        <TicketsDrag />
      </Grid>
      <Grid item xs={9} style={{ padding: "2em" }}>
        <TicketDrop />
      </Grid>
    </Grid>
  );
}
