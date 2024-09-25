import React from 'react';
import {Text, View, Modal, Pressable, Image} from 'react-native';
import {CompleteTodoModalProps} from '../../utilities/types';
import completeTodoModalStyles from './CompleteTodoModalStyles';
import APP_TEXTS from '../../utilities/appTexts';
import icons from '../../utilities/icons';

export default function CompleteTodoModal({
  isModalVisible,
  setIsModalVisible,
  handleCompleteTodos,
  todoItem,
}: CompleteTodoModalProps) {
  const handleCompleteTodo = () => {
    handleCompleteTodos(todoItem.id, todoItem.title, todoItem.description);
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
      <View style={completeTodoModalStyles.modalContainer}>
        <View style={completeTodoModalStyles.modalContent}>
          <Pressable
            onPress={handleCloseModal}
            style={completeTodoModalStyles.closeIconContainer}>
            <Image
              source={icons.closeIcon}
              style={completeTodoModalStyles.closeIcon}
              resizeMode="contain"
            />
          </Pressable>
          <Text style={completeTodoModalStyles.modalTitle}>
            {APP_TEXTS.completeTodoText}
          </Text>
          <Text style={completeTodoModalStyles.modalInfoText}>
            {APP_TEXTS.completeTodoInfoText}
          </Text>
          <View style={completeTodoModalStyles.buttonContainer}>
            <Pressable
              style={completeTodoModalStyles.completeTodoButton}
              onPress={handleCompleteTodo}>
              <Text style={completeTodoModalStyles.completeTodoButtonText}>
                {APP_TEXTS.completeTodoButtonText}
              </Text>
            </Pressable>
            <Pressable
              style={completeTodoModalStyles.cancelTodoButton}
              onPress={handleCloseModal}>
              <Text style={completeTodoModalStyles.cancelTodoButtonText}>
                {APP_TEXTS.cancelTodoText}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
