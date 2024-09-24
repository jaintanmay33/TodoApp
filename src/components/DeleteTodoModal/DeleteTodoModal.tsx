import React from 'react';
import {Text, View, Modal, Pressable, Image} from 'react-native';
import {DeleteTodoModalProps} from '../../utilities/types';
import deleteTodoModalStyles from './DeleteTodoModalStyles';
import APP_TEXTS from '../../utilities/appTexts';
import icons from '../../utilities/icons';

export default function DeleteTodoModal({
  isModalVisible,
  setIsModalVisible,
  handleDeleteTodos,
  todoId,
}: DeleteTodoModalProps) {
  const handleDeleteTodo = () => {
    handleDeleteTodos(todoId);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={handleCloseModal}>
      <View style={deleteTodoModalStyles.modalContainer}>
        <View style={deleteTodoModalStyles.modalContent}>
          <Pressable
            onPress={handleCloseModal}
            style={deleteTodoModalStyles.closeIconContainer}>
            <Image
              source={icons.closeIcon}
              style={deleteTodoModalStyles.closeIcon}
              resizeMode="contain"
            />
          </Pressable>
          <Text style={deleteTodoModalStyles.modalTitle}>
            {APP_TEXTS.deleteTodoText}
          </Text>
          <Text style={deleteTodoModalStyles.modalInfoText}>
            {APP_TEXTS.deleteTodoInfoText}
          </Text>
          <View style={deleteTodoModalStyles.buttonContainer}>
            <Pressable
              style={deleteTodoModalStyles.deleteTodoButton}
              onPress={handleDeleteTodo}>
              <Text style={deleteTodoModalStyles.deleteTodoButtonText}>
                {APP_TEXTS.deleteTodoText}
              </Text>
            </Pressable>
            <Pressable
              style={deleteTodoModalStyles.cancelTodoButton}
              onPress={handleCloseModal}>
              <Text style={deleteTodoModalStyles.cancelTodoButtonText}>
                {APP_TEXTS.cancelTodoText}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
