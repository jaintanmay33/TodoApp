import React from 'react';
import {Text, View} from 'react-native';
import emptyComponentStyles from './EmptyComponentStyles';
import APP_TEXTS from '../../utilities/appTexts';

export default function EmptyComponent() {
  return (
    <View style={emptyComponentStyles.container}>
      <Text style={emptyComponentStyles.text}>{APP_TEXTS.emptyListText}</Text>
    </View>
  );
}
