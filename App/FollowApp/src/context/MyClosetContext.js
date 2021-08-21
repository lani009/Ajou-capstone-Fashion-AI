import React, {useState, createContext} from 'react';
import {MyClothData} from '../data/MyClothData';

const MyClosetContext = createContext({
    myClothList: [],
    dispatch: undefined,
});

const MyClosetProvider = ({children}) => {
    const [, setClothList] = useState([]);
    const value = {myClothList: MyClothData, dispatch: setClothList};
    return (
        <MyClosetContext.Provider value={value}>
            {children}
        </MyClosetContext.Provider>
    );
};

export {MyClosetContext, MyClosetProvider};
