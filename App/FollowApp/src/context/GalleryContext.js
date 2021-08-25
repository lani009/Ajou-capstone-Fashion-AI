import React, { createContext, useState } from 'react';
import { UserContext } from './UserContext';

const GalleryContext = createContext({
    myAvatar: 0,
})

const GalleryProvider = ({ children }) => {
    const [avatar, setAvatar] = useState(0);
    const value = { avatar: { avatar }, setAvatar }

    return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
};

const GalleryConsumer = UserContext.Consumer;

const AvatarImgContext = createContext([
    {
        url: '',
        props: {
            source: require('../../asset/img/TryOn/Avatar/0_0.png'),
        },
        id: 0,
    },
    {
        url: '',
        props: {
            source: require('./avatar/avatar2.png'),
        },
        id: 1,
    },
    {
        url: '',
        props: {
            source: require('./avatar/avatar3.png'),
        },
        id: 2,
    },
    {
        url: '',
        props: {
            source: require('./avatar/avatar4.png'),
        },
        id: 3,
    },
    {
        url: '',
        props: {
            source: require('./avatar/avatar5.png'),
        },
        id: 4,
    },
    {
        url: '',
        props: {
            source: require('./avatar/avatar6.png'),
        },
        id: 5,
    },
]);



// export { GalleryContext, GalleryProvider };

export default { GalleryProvider, GalleryConsumer, AvatarImgContext };
