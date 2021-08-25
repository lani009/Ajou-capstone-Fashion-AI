import React, { createContext, useState } from 'react';

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

export { AvatarImgContext };
