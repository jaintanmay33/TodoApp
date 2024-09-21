import {StyleSheet} from 'react-native';
import {APP_SIZES, COLORS} from '../../utilities/constants';

const emptyComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: APP_SIZES.size19 * 2.4,
  },
  text: {
    fontWeight: '500',
    color: COLORS.grey,
    textAlign: 'center',
    fontSize: APP_SIZES.size11 + APP_SIZES.size4,
  },
});

export default emptyComponentStyles;
