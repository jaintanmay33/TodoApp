import {StyleSheet} from 'react-native';
import {APP_SIZES, COLORS} from './src/utilities/constants';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  listContainer: {
    flex: 1,
    marginBottom: APP_SIZES.size18,
    paddingVertical: APP_SIZES.size13,
    paddingHorizontal: APP_SIZES.size11,
  },
});

export default appStyles;
