import React, {useState, createContext} from 'react';

const AvatarContext = createContext({
    state: {avatar: ''},
    actions: {
        setAvatar: () => {
            // intentional
        },
    },
});

const AvatarProvider = ({children}) => {
    const [avatar, setAvatar] = useState('');

    const value = {
        state: {avatar},
        actions: {setAvatar},
    };
    return (
        <AvatarContext.Provider value={value}>
            {children}
        </AvatarContext.Provider>
    );
};

const {Consumer: AvatarConsumer} = AvatarContext;

export {AvatarConsumer, AvatarProvider};
export default AvatarContext;
