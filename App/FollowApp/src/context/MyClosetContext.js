import React, { useState, createContext } from 'react';

const MyClosetContext = createContext({
    myClothList: [],
    dispatch: undefined,
});

const MyClosetProvider = ({ children }) => {
    const [clothList, setClothList] = useState([]);
    const value = { myClothList: clothList, dispatch: setClothList };
    return (
        <MyClosetContext.Provider value={value}>
            {children}
        </MyClosetContext.Provider>
    );
};


export { MyClosetContext, MyClosetProvider };
