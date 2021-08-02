import React, { useState, createContext } from 'react';

const MyClosetContext = createContext({
    myClothList = new Array(),
});

const MyClosetProvider = ({ children }) => {
  const [inProgress, setInProgress] = useState(false);
  const spinner = {
    start: () => setInProgress(true),
    stop: () => setInProgress(false),
  };
  const value = { inProgress, spinner };
  return (
    <MyClosetContext.Provider value={value}>
      {children}
    </MyClosetContext.Provider>
  );
};

export { MyClosetContext, MyClosetProvider };
