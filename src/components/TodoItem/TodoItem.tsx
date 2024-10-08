import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import todoItemStyles from './TodoItemStyles';
import {TodoItemProps} from '../../utilities/types';
import icons from '../../utilities/icons';
import EditTodoModal from '../EditTodoModal/EditTodoModal';
import DeleteTodoModal from '../DeleteTodoModal/DeleteTodoModal';
import CompleteTodoModal from '../CompleteTodoModal/CompleteTodoModal';

export default function TodoItem({
  item,
  handleEditTodos,
  handleDeleteTodos,
  handleCompleteTodos,
}: TodoItemProps) {
  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] =
    useState<boolean>(false);
  const [isCompletedModalVisible, setIsCompletedModalVisible] =
    useState<boolean>(false);

  const showEditModal = () => {
    setIsEditModalVisible(true);
  };

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const showCompleteModal = () => {
    setIsCompletedModalVisible(true);
  };

  return (
    <View key={item.id} style={todoItemStyles.todoItemContainer}>
      <Pressable onPress={showCompleteModal}>
        <View style={todoItemStyles.todoItemCheckBox} />
      </Pressable>
      <View style={todoItemStyles.todoItemContent}>
        <Text style={todoItemStyles.todoItemTitle}>{item.title}</Text>
        {item.description && (
          <Text style={todoItemStyles.todoItemDescription}>
            {item.description}
          </Text>
        )}
      </View>
      <View style={todoItemStyles.todoItemIconContainer}>
        <Pressable onPress={showEditModal}>
          <Image
            source={icons.editIcon}
            style={todoItemStyles.todoItemIcon}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable onPress={showDeleteModal}>
          <Image
            source={icons.deleteIcon}
            style={todoItemStyles.todoItemIcon}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <EditTodoModal
        isModalVisible={isEditModalVisible}
        setIsModalVisible={setIsEditModalVisible}
        handleEditTodos={handleEditTodos}
        todoItem={item}
      />
      <DeleteTodoModal
        isModalVisible={isDeleteModalVisible}
        setIsModalVisible={setIsDeleteModalVisible}
        handleDeleteTodos={handleDeleteTodos}
        todoId={item.id}
      />
      <CompleteTodoModal
        isModalVisible={isCompletedModalVisible}
        setIsModalVisible={setIsCompletedModalVisible}
        handleCompleteTodos={handleCompleteTodos}
        todoItem={item}
      />
    </View>
  );
}
