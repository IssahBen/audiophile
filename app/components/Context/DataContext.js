import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [numberOfMark1, setNumberOfMark1] = useState(0);
  const [numberOfMark2, setNumberOfMark2] = useState(0);
  const [numberOfxx59, setNumberOfxx59] = useState(0);
  const [numberOfZx7, setNumberOfZx7] = useState(0);
  const [numberOfZx9, setNumberOfZx9] = useState(0);
  const [numberOfYx1, setNumberOfYx1] = useState(0);
  const [numberofitems, setNumberOfItems] = useState(0);

  useEffect(() => {
    const list = [
      numberOfMark1,
      numberOfMark2,
      numberOfYx1,
      numberOfZx7,
      numberOfZx9,
      numberOfxx59,
    ];

    let items = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] !== 0) {
        items += 1;
      }
    }
    setNumberOfItems(items);
  }, [
    numberOfMark1,
    numberOfMark2,
    numberOfYx1,
    numberOfZx7,
    numberOfZx9,
    numberOfxx59,
  ]);
  return (
    <DataContext.Provider
      value={{
        numberOfMark1,
        setNumberOfMark1,
        numberOfMark2,
        setNumberOfMark2,
        numberOfxx59,
        setNumberOfxx59,
        numberOfZx7,
        setNumberOfZx7,
        numberOfZx9,
        setNumberOfZx9,
        numberOfYx1,
        setNumberOfYx1,
        numberofitems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext was used outside the provider");
  return context;
}

export { useData, DataProvider };