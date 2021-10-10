import { Grid, Select, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import "./TicketDrop.css";
import CardPlaceHolder from "../../assets/Subtract.svg";
import { useDrop } from "react-dnd";
import { drawTicket, Ticket } from "../../app/features/tickets/ticketsSlice";
import MintableTicket from "../../assets/mintable-min-ticket.svg";
export default function TicketDrop(): JSX.Element {
  const dispatch = useAppDispatch();
  const [raffleResult, setRaffleResult] = useState("");
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ticket",
    drop: (type: Ticket) => unpackTicket(type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const unpackTicket = (type: Ticket) => {
    dispatch(drawTicket(type));
    const res = Math.random() < 0.5;
    const raffleResult = res ? "You won!" : "You Lost!";
    setRaffleResult(raffleResult);
  };

  return (
    <Card elevation={8}>
      <Typography style={{ marginTop: "5vh" }} variant="h3">
        Collectors Event
      </Typography>
      <Typography variant="body1">
        Participate and win high quality currated NFTs
      </Typography>
      <div className="dropArea" ref={drop}>
        <img style={{ margin: "4em 0em 4em 0em" }} src={CardPlaceHolder}></img>
        <Typography variant="body1">
          Drag a ticket or use the button below to draw your tickets{" "}
        </Typography>
      </div>

      {raffleResult && <Typography variant="h2">{raffleResult}</Typography>}

      <hr className="divider" />
      <Grid container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
        <Grid item xs={3}>
          <img src={MintableTicket} />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" textAlign="start">
            Draw Tickets{" "}
          </Typography>
          <Typography textAlign="start">
            Open your tickets and get a chance to win $1000 worht of high
            quality NFTs! <a href="/">Learn more</a>
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Select value={"Silver Ticket (1)"}></Select>
        </Grid>
      </Grid>
    </Card>
  );
}
