import {StyleSheet} from 'react-native';
import {APP_SIZES, COLORS} from '../../utilities/constants';

const todoItemStyles = StyleSheet.create({
  todoItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: APP_SIZES.size10,
    justifyContent: 'space-between',
    padding: APP_SIZES.size10 + APP_SIZES.size5,
  },
  todoItemContent: {
    flex: 1,
    marginHorizontal: APP_SIZES.size10,
  },
  todoItemCheckBox: {
    width: APP_SIZES.size11,
    height: APP_SIZES.size11,
    borderRadius: APP_SIZES.size5,
    backgroundColor: COLORS.primaryColor,
  },
  todoItemTitle: {
    fontWeight: '600',
    color: COLORS.black,
    fontSize: APP_SIZES.size10 + APP_SIZES.size8,
  },
  todoItemDescription: {
    fontWeight: '400',
    color: COLORS.black,
    fontSize: APP_SIZES.size10 + APP_SIZES.size4,
  },
  todoItemIconContainer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoItemIcon: {
    tintColor: COLORS.primaryColor,
    width: APP_SIZES.size11 + APP_SIZES.size5,
    height: APP_SIZES.size11 + APP_SIZES.size5,
  },
});

export default todoItemStyles;
