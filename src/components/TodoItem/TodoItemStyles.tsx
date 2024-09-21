import {StyleSheet} from 'react-native';
import {APP_SIZES, COLORS} from '../../utilities/constants';

const todoItemStyles = StyleSheet.create({
  todoItemContainer: {
    backgroundColor: COLORS.white,
    borderRadius: APP_SIZES.size10,
    padding: APP_SIZES.size10 + APP_SIZES.size5,
  },
  todoItemText: {
    fontWeight: '400',
    color: COLORS.black,
    fontSize: APP_SIZES.size10 + APP_SIZES.size4,
  },
});

export default todoItemStyles;
