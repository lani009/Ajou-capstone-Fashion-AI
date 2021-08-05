import React, {useState, createContext} from 'react';
import {MyLookData} from '../data/MyLookData';

const MyLookContext = createContext({
    myLookList: [],
    dispatch: undefined,
});

const MyLookProvider = ({children}) => {
    const [, setLookList] = useState([]);
    const value = {myLookList: MyLookData, dispatch: setLookList};
    return (
        <MyLookContext.Provider value={value}>
            {children}
        </MyLookContext.Provider>
    );
};

export {MyLookContext, MyLookProvider};
