import {StyleSheet} from 'react-native';
import {APP_SIZES, COLORS} from './src/utilities/constants';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
  emptyText: {
    fontWeight: '500',
    color: COLORS.grey,
    fontSize: APP_SIZES.size11,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    padding: APP_SIZES.size11,
  },
  completedText: {
    fontWeight: '500',
    color: COLORS.black,
    marginBottom: APP_SIZES.size10,
    fontSize: APP_SIZES.size10 + APP_SIZES.size5,
  },
});

export default appStyles;
