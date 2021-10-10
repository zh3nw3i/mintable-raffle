import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import TicketCard from "../TicketCard/TicketCard";
import "./TicketsDrag.css";
import GoldCard from "../../assets/mintable-gold-card-nft.svg";
import SilverCard from "../../assets/mintable-silver-card-nft.svg";
import DiamondCard from "../../assets/mintable-diamond-card-nft.svg";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { TicketType } from "../../app/features/tickets/ticketsSlice";

export default function TicketsDrag(): JSX.Element {
  const tickets = useAppSelector((state: RootState) => state.tickets.value);
  const silverCount = tickets.filter(
    (ticket) => ticket.type === "SILVER"
  ).length;
  const goldCount = tickets.filter((ticket) => ticket.type === "GOLD").length;
  const diamondCount = tickets.filter(
    (ticket) => ticket.type === "DIAMOND"
  ).length;

  return (
    <Card className="root" elevation={8}>
      <div className="heading">
        <span style={{ marginRight: "10em" }}>Get More Tickets</span>
        <Button className="buyButton">Buy</Button>
      </div>
      <hr className="divider" />
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TicketCard
              image={SilverCard}
              type={TicketType.SILVER}
              count={silverCount}
            />
          </Grid>
          <Grid item xs={12}>
            <TicketCard
              image={GoldCard}
              type={TicketType.GOLD}
              count={goldCount}
            />
          </Grid>
          <Grid item xs={12}>
            <TicketCard
              image={DiamondCard}
              type={TicketType.DIAMOND}
              count={diamondCount}
            />
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}
