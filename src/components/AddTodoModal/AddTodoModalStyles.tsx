import {StyleSheet} from 'react-native';
import {APP_SIZES, COLORS, SCREEN_WIDTH} from '../../utilities/constants';

const addTodoModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black2,
  },
  modalContent: {
    padding: APP_SIZES.size11,
    borderWidth: APP_SIZES.size2,
    backgroundColor: COLORS.white,
    borderRadius: APP_SIZES.size10,
    borderColor: COLORS.primaryColor,
    width: SCREEN_WIDTH - APP_SIZES.size13,
  },
  modalTitle: {
    fontWeight: '700',
    textAlign: 'center',
    color: COLORS.black,
    marginBottom: APP_SIZES.size11,
    fontSize: APP_SIZES.size10 + APP_SIZES.size8,
  },
  modalTextInput: {
    borderColor: COLORS.grey,
    borderWidth: APP_SIZES.size2,
    borderRadius: APP_SIZES.size10,
    marginBottom: APP_SIZES.size11,
    paddingVertical: APP_SIZES.size10,
    fontSize: APP_SIZES.size10 + APP_SIZES.size4,
    paddingHorizontal: APP_SIZES.size10 + APP_SIZES.size5,
  },
  modalFocusedInput: {
    borderColor: COLORS.primaryColor,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  addTodoButton: {
    alignItems: 'center',
    width: APP_SIZES.size19,
    justifyContent: 'center',
    borderRadius: APP_SIZES.size10,
    backgroundColor: COLORS.primaryColor,
    paddingVertical: APP_SIZES.size10 + APP_SIZES.size2,
  },
  addTodoButtonText: {
    fontWeight: '700',
    color: COLORS.white,
    fontSize: APP_SIZES.size10 + APP_SIZES.size6,
  },
  cancelTodoButton: {
    alignItems: 'center',
    width: APP_SIZES.size19,
    justifyContent: 'center',
    borderWidth: APP_SIZES.size2,
    backgroundColor: COLORS.white,
    borderRadius: APP_SIZES.size10,
    borderColor: COLORS.primaryColor,
    paddingVertical: APP_SIZES.size10 + APP_SIZES.size2,
  },
  cancelTodoButtonText: {
    fontWeight: '700',
    color: COLORS.primaryColor,
    fontSize: APP_SIZES.size10 + APP_SIZES.size6,
  },
});

export default addTodoModalStyles;
