import Look from '../object/Look';
import {MyClothData} from './MyClothData';

export const MyLooksData = [
    new Look(
        '1_1',
        'Gucci & Blue Jean',
        MyClothData[3],
        MyClothData[0],
        require('../../asset/img/TryOn/Look/1_1.png'),
    ),
    new Look(
        '3_1',
        'Man2Man & Blue Jean',
        MyClothData[5],
        MyClothData[0],
        require('../../asset/img/TryOn/Look/3_1.png'),
    ),
    new Look(
        '2_2',
        'Cardigan & Black Jean',
        MyClothData[4],
        MyClothData[1],
        require('../../asset/img/TryOn/Look/2_2.png'),
    )
   
];
