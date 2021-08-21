import React, {useState, createContext} from 'react';
import {MyLooksData} from '../data/MyLooksData';

const MyLookContext = createContext({
    myLookList: [],
    dispatch: undefined,
});

const MyLookProvider = ({children}) => {
    const [, setLookList] = useState([]);
    const value = {myLookList: MyLooksData, dispatch: setLookList};
    return (
        <MyLookContext.Provider value={value}>
            {children}
        </MyLookContext.Provider>
    );
};

export {MyLookContext, MyLookProvider};
