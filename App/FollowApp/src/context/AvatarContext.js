import React, { createContext, useState } from 'react';

const AvatarContext = createContext({
    myAvatar: 0,
    dispatch: undefined,
})

const AvatarProvider = ({ children }) => {
    const [myAvatar, setMyAvatar] = useState(0);
    const dispatch = (avatar) => {
        setUser(avatar);
    }
    const value = { myAvatar, dispatch };
    return <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
};

export { AvatarProvider, AvatarContext };
