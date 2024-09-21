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
  inputContainer: {
    marginBottom: APP_SIZES.size11,
  },
  modalTextInput: {
    borderColor: COLORS.grey,
    borderWidth: APP_SIZES.size2,
    borderRadius: APP_SIZES.size10,
    paddingVertical: APP_SIZES.size10,
    fontSize: APP_SIZES.size10 + APP_SIZES.size4,
    paddingHorizontal: APP_SIZES.size10 + APP_SIZES.size5,
  },
  modalFocusedInput: {
    borderColor: COLORS.primaryColor,
  },
  modalInputLabelText: {
    fontWeight: '500',
    color: COLORS.grey,
    position: 'absolute',
    top: -APP_SIZES.size7,
    backgroundColor: COLORS.white,
    paddingHorizontal: APP_SIZES.size5,
    left: APP_SIZES.size10 + APP_SIZES.size5,
  },
  modalInputFocusedLabelText: {
    color: COLORS.primaryColor,
  },
  modalInputErrorText: {
    fontWeight: '500',
    color: COLORS.red,
    marginTop: APP_SIZES.size5,
    marginLeft: APP_SIZES.size10 + APP_SIZES.size5,
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
