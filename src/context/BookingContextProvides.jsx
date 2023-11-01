import React, { useContext, useState, useEffect } from "react";
import BookingsContext from "./BookingContext";
import { database } from "../appwrite/appwriteConfig";
import { ID, Query } from "appwrite";
import { useUser } from "./UserContextProvider";

export function useBookings() {
  return useContext(BookingsContext);
}
export function BookingsProvider(props) {
  const user = useUser();
  const [bookings, setBookings] = useState([]);

  async function add(booking) {
    const response = await database.createDocument(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_COLL_ID,
      ID.unique(),
      booking
    );
    setBookings((bookings) => [response.$id, ...bookings].slice(0, 10));
  }

  async function remove(id) {
    await database.deleteDocument(import.meta.env.VITE_DB_ID, import.meta.env.VITE_COLL_ID, id);
    setBookings((bookings) => bookings.filter((booking) => booking.$id !== id));
    await init(); // Refetch bookings to ensure we have 10 items
  }

  async function init() {
    const response = await database.listDocuments(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_COLL_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10), Query.equal("userId", [user.current.$id])]
    );
    setBookings(response.documents);
  }

  useEffect(() => {
    init();
  }, [user]);

  return (
    <BookingsContext.Provider value={{ current: bookings, add, remove }}>
      {props.children}
    </BookingsContext.Provider>
  );
}
