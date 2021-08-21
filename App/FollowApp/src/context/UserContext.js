import React, { useState, createContext } from 'react';

const UserContext = createContext({
    user: {
        /**
         * 로그인 여부
         */
        isLoggedIn: false,
        /**
         * 유저 이름
         */
        userName: '',
        /**
         * 유저 비밀번호
         */
        password: '',
    },
    dispatch: undefined,
});

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const dispatch = (isLoggedIn, userName, password) => {
        setUser({ isLoggedIn, userName, password });
    };
    const value = { user, dispatch };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
