import {StyleSheet} from 'react-native';
import {APP_SIZES, COLORS} from '../../utilities/constants';

const completedTodoItemStyles = StyleSheet.create({
  todoItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: APP_SIZES.size10,
    justifyContent: 'space-between',
    padding: APP_SIZES.size10 + APP_SIZES.size5,
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
});

export default completedTodoItemStyles;
