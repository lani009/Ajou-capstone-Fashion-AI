import React, {useState, createContext} from 'react';


const MyClosetContext = createContext({
    myClothList: [
        {
            id: '1',
            src: require('../../asset/test/TryOn/Clothes/1.png'),
        },
        {
            id: '2',
            src: require('../../asset/test/TryOn/Clothes/2.png'),
        },
        {
            id: '3',
            src: require('../../asset/test/TryOn/Clothes/3.png'),
        },
        {
            id: '4',
            src: require('../../asset/test/TryOn/Clothes/4.png'),
        },
        {
            id: '5',
            src: require('../../asset/test/TryOn/Clothes/5.png'),
        },
        {
            id: '6',
            src: require('../../asset/test/TryOn/Clothes/6.png'),
        },
        {
            id: '7',
            src: require('../../asset/test/TryOn/Clothes/7.png'),
        },
        {
            id: '8',
            src: require('../../asset/test/TryOn/Clothes/8.png'),
        },
        {
            id: '9',
            src: require('../../asset/test/TryOn/Clothes/9.png'),
        },
        {
            id: '10',
            src: require('../../asset/test/TryOn/Clothes/10.png'),
        },
    ],
    dispatch: undefined,
});

const MyClosetProvider = ({children}) => {
    const [clothList, setClothList] = useState([]);
    const value = {myClothList: clothList, dispatch: setClothList};
    return (
        <MyClosetContext.Provider value={value}>
            {children}
        </MyClosetContext.Provider>
    );
};

export {MyClosetContext, MyClosetProvider};
