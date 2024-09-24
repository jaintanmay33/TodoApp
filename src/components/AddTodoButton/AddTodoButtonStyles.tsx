import {StyleSheet} from 'react-native';
import {APP_SIZES, COLORS} from '../../utilities/constants';

const addTodoButtonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    right: APP_SIZES.size11,
    width: APP_SIZES.size14,
    height: APP_SIZES.size14,
    justifyContent: 'center',
    bottom: APP_SIZES.size13,
    borderRadius: APP_SIZES.size14,
    backgroundColor: COLORS.primaryColor,
  },
  icon: {
    tintColor: COLORS.white,
    width: APP_SIZES.size12 + APP_SIZES.size5,
    height: APP_SIZES.size12 + APP_SIZES.size5,
  },
});

export default addTodoButtonStyles;
