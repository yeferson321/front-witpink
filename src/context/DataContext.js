import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({children}) => {

  const [itemone, setItemone] = useState(null)
  const addItemone = (itemone) => { setItemone(itemone) }
  const [itemtwo, setItemtwo] = useState(null)
  const additemtwo = (itemone) => { setItemtwo(itemone) }
  const [itemthree, setItemthree] = useState(null)
  const addItemthree = (itemthree) => { setItemthree(itemthree) }

  return (

    <DataContext.Provider value={{ itemone, addItemone, itemtwo, additemtwo, itemthree, addItemthree }}>
      {children}
    </DataContext.Provider>

  );
}
export default DataProvider