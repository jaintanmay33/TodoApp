import React from 'react';
import {View, Text} from 'react-native';
import todoItemStyles from './TodoItemStyles';
import {TodoItemProps} from '../../utilities/types';

export default function TodoItem({item}: TodoItemProps) {
  return (
    <View key={item.id} style={todoItemStyles.todoItemContainer}>
      <Text style={todoItemStyles.todoItemTitle}>{item.title}</Text>
      {item.description && (
        <Text style={todoItemStyles.todoItemDescription}>
          {item.description}
        </Text>
      )}
    </View>
  );
}
