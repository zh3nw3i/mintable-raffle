import React from "react";
import { useDrag } from "react-dnd";
import Avatar from "@mui/material/Avatar";
import { TicketType } from "../../app/features/tickets/ticketsSlice";

interface TicketCardType {
  image: string;
  type: TicketType;
  count: number;
}
export default function TicketCardType({
  image,
  type,
  count,
}: TicketCardType): JSX.Element {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ticket",
    item: { type: type },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <div>
      <span>
        <Avatar style={{ backgroundColor: "#550DED", marginLeft: "70%" }}>
          {count}
        </Avatar>
      </span>
      <img
        draggable={count !== 0}
        ref={drag}
        src={image}
        width="150px"
        style={{ opacity: isDragging || count === 0 ? "0.6" : "1" }}
      />
    </div>
  );
}
