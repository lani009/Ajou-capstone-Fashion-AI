import React, {useState, createContext} from 'react';
import {MyClothData} from '../data/MyClothData';

const MyClosetContext = createContext({
    myClothList: [],
    dispatch: undefined,
});

const MyClosetProvider = ({children}) => {
    const [clothList, setClothList] = useState([]);
    setClothList(MyClothData);
    const value = {myClothList: clothList, dispatch: setClothList};
    return (
        <MyClosetContext.Provider value={value}>
            {children}
        </MyClosetContext.Provider>
    );
};

export {MyClosetContext, MyClosetProvider};
