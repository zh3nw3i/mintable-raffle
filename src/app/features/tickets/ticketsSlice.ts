import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum TicketType {
  SILVER = "SILVER",
  GOLD = "GOLD",
  DIAMOND = "DIAMOND",
}

export interface Ticket {
  id: string;
  type: TicketType;
}

interface Tickets {
  value: Ticket[];
}

const initialState: Tickets = {
  value: [
    {
      id: "1",
      type: TicketType.SILVER,
    },
    {
      id: "2",
      type: TicketType.GOLD,
    },
    {
      id: "3",
      type: TicketType.GOLD,
    },
    {
      id: "4",
      type: TicketType.DIAMOND,
    },
  ],
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    drawTicket: (state, action: PayloadAction<Ticket>) => {
      const drawnTicketIdx = state.value.findIndex(
        (ticket) => ticket.type === action.payload.type
      );
      state.value.splice(drawnTicketIdx, 1);
    },
  },
});

export const { drawTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;
