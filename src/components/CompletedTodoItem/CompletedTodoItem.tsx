import React from 'react';
import {View, Text} from 'react-native';
import completedTodoItemStyles from './CompletedTodoItemStyles';
import {TodoItemProps} from '../../utilities/types';

export default function CompletedTodoItem({item}: TodoItemProps) {
  return (
    <View key={item.id} style={completedTodoItemStyles.todoItemContainer}>
      <Text style={completedTodoItemStyles.todoItemTitle}>{item.title}</Text>
      {item.description && (
        <Text style={completedTodoItemStyles.todoItemDescription}>
          {item.description}
        </Text>
      )}
    </View>
  );
}
