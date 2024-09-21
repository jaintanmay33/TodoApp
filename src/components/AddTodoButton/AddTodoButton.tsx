import React from 'react';
import {Text, Pressable} from 'react-native';
import addTodoButtonStyles from './AddTodoButtonStyles';
import {AddTodoProps} from '../../utilities/types';

export default function AddTodoButton({onPress}: AddTodoProps) {
  return (
    <Pressable style={addTodoButtonStyles.container} onPress={onPress}>
      <Text style={addTodoButtonStyles.text}>+</Text>
    </Pressable>
  );
}
