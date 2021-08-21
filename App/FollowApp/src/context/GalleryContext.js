import React, { createContext, useState } from 'react';

const GalleryContext = createContext({
    myAvatar: 0,
})

const GalleryProvider = ({ children }) => {
    const [avatar, setAvatar] = useState(0);
};

const AvatarImgContext = createContext([
    {
        url: '',
        props: {
            source: require('./avatar/avatar1.png'),
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

export default { GalleryContext, GalleryProvider, AvatarImgContext };
