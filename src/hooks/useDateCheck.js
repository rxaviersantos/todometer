import { useEffect } from "react";
import { format, parseISO, isBefore } from "date-fns";
import { useAppState, useAppReducer } from "../AppContext";

export default function useDateCheck() {
  const { date } = useAppState();
  const dispatch = useAppReducer();
  const storedDate = parseISO(`${date.year}-${date.month}-${date.day}`);

  useEffect(() => {
    const interval = setInterval(() => {
      let nd = new Date();
      let currentDate = parseISO(
        `${format(nd, "y")}-${format(nd, "MM")}-${format(nd, "dd")}`
      );

      if (isBefore(storedDate, currentDate)) {
        new Notification("todometer reset time!", {
          body: "It's a new day! Your todos are being reset."
        });
        dispatch({ type: "RESET_ALL" });
        window.location.reload();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [storedDate, dispatch]);
}
