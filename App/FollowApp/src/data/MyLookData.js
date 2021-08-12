import {MyClothData} from './MyClothData';
import Look from '../object/Look';

export const MyLookData = [
    new Look(
        '1',
        'Spring Look',
        MyClothData[0],
        MyClothData[0],
        require('../../asset/img/MyLook/MyLookTest.png'),
    ),
    new Look(
        '2',
        'Summer Look',
        MyClothData[1],
        MyClothData[1],
        require('../../asset/img/MyLook/MyLookTest.png'),
    ),
    new Look(
        '3',
        'Sportswear',
        MyClothData[2],
        MyClothData[2],
        require('../../asset/img/MyLook/MyLookTest.png'),
    ),
    new Look(
        '4',
        'Couple Look',
        MyClothData[3],
        MyClothData[3],
        require('../../asset/img/MyLook/MyLookTest.png'),
    ),
];
