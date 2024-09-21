import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const sizes = [
  0, 0.271, 0.541, 0.811, 1.082, 1.352, 1.622, 1.892, 2.163, 2.433, 2.703,
  5.406, 8.109, 10.811, 13.514, 16.217, 18.919, 21.622, 24.325, 27.028,
];

const APP_SIZES: any = {};

sizes.forEach((size, index) => {
  APP_SIZES[`size${index}`] = (SCREEN_WIDTH * size) / 100;
});

const COLORS = {
  backgroundColor: '#E8EAED',
  primaryColor: '#6F22BC',
  black: '#000',
  black2: '#00000080',
  white: '#fff',
  grey: '#C0C0C0',
};

export {SCREEN_WIDTH, APP_SIZES, COLORS};
