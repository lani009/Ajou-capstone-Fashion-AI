import React, {useState, createContext} from 'react';

const MySelectionContext = createContext({
    state: {top: '', bottom: ''},
    actions: {
        setTop: () => {},
        setBottom: () => {},
    },
});

const MySelectionProvider = ({children}) => {
    const [top, setTop] = useState('');
    const [bottom, setBottom] = useState('');
    const value = {
        state: {top, bottom},
        actions: {setTop, setBottom},
    };
    return (
        <MySelectionContext.Provider value={value}>
            {children}
        </MySelectionContext.Provider>
    );
};

const {Consumer: MySelectionConsumer} = MySelectionContext;

export {MySelectionConsumer, MySelectionProvider};
export default MySelectionContext;
