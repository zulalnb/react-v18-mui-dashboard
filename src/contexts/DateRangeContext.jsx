import { useState, createContext, useContext } from "react";

const DateRangeContext = createContext();

const DateRangeProvider = ({ children }) => {
  const [dateRangeSelected, setDateRangeSelected] = useState(false);

  const disableDateRange = () => setDateRangeSelected(false);

  const enableDateRange = () => setDateRangeSelected(true);

  const values = {
    dateRangeSelected,
    setDateRangeSelected,
    enableDateRange,
    disableDateRange,
  };

  return (
    <DateRangeContext.Provider value={values}>
      {children}
    </DateRangeContext.Provider>
  );
};

const useDateRange = () => useContext(DateRangeContext);

export { DateRangeProvider, useDateRange };
