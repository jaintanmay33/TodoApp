import React from 'react';
import {Text, View} from 'react-native';
import headerStyles from './HeaderStyles';
import APP_TEXTS from '../../utilities/appTexts';

export default function Header() {
  return (
    <View style={headerStyles.headerContainer}>
      <Text style={headerStyles.headerTitle}>{APP_TEXTS.headerTitle}</Text>
    </View>
  );
}
