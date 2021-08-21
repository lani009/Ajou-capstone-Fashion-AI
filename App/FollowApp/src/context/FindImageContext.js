import React, {useState, createContext} from 'react';

const FindImageContext = createContext({
    state: {clothes: ''},
    actions: {
        setClothes: () => {},
    },
});

const FindImageProvider = ({children}) => {
    const [clothes, setClothes] = useState('');

    const value = {
        state: {clothes},
        actions: {setClothes},
    };
    return (
        <FindImageContext.Provider value={value}>
            {children}
        </FindImageContext.Provider>
    );
};

const {Consumer: FindImageConsumer} = FindImageContext;

export {FindImageConsumer, FindImageProvider};
export default FindImageContext;
