import React from 'react';
import {Pressable, Image} from 'react-native';
import addTodoButtonStyles from './AddTodoButtonStyles';
import {AddTodoProps} from '../../utilities/types';
import icons from '../../utilities/icons';

export default function AddTodoButton({onPress}: AddTodoProps) {
  return (
    <Pressable style={addTodoButtonStyles.container} onPress={onPress}>
      <Image
        source={icons.addIcon}
        style={addTodoButtonStyles.icon}
        resizeMode="contain"
      />
    </Pressable>
  );
}
