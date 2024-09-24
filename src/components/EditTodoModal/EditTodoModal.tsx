import React, {useState, useEffect} from 'react';
import {Text, View, Modal, TextInput, Pressable, Image} from 'react-native';
import {EditTodoModalProps} from '../../utilities/types';
import editTodoModalStyles from './EditTodoModalStyles';
import APP_TEXTS from '../../utilities/appTexts';
import {validateTitle} from '../../utilities/validations';
import icons from '../../utilities/icons';

export default function EditTodoModal({
  isModalVisible,
  setIsModalVisible,
  handleEditTodos,
  todoItem,
}: EditTodoModalProps) {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    if (todoItem) {
      setTitle(todoItem.title);
      if (todoItem.description) {
        setDescription(todoItem.description);
      }
    }
  }, []);

  const handleEditTodo = () => {
    if (!title || titleError) {
      setTitleError(validateTitle(title));
    } else {
      handleEditTodos(todoItem.id, title, description);
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setTitleError('');
    setFocusedField('');
    setIsModalVisible(false);
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={handleCloseModal}>
      <View style={editTodoModalStyles.modalContainer}>
        <View style={editTodoModalStyles.modalContent}>
          <Pressable
            onPress={handleCloseModal}
            style={editTodoModalStyles.closeIconContainer}>
            <Image
              source={icons.closeIcon}
              style={editTodoModalStyles.closeIcon}
              resizeMode="contain"
            />
          </Pressable>
          <Text style={editTodoModalStyles.modalTitle}>
            {APP_TEXTS.editTodoText}
          </Text>
          <View style={editTodoModalStyles.inputContainer}>
            <TextInput
              style={[
                editTodoModalStyles.modalTextInput,
                focusedField === 'title' &&
                  editTodoModalStyles.modalFocusedInput,
              ]}
              value={title}
              onChangeText={(text: string) => {
                setTitle(text);
                setTitleError(validateTitle(text));
              }}
              placeholder={APP_TEXTS.todoTitlePlaceholder}
              onFocus={() => setFocusedField('title')}
              onBlur={() => setFocusedField('')}
            />
            {title !== '' && (
              <Text
                style={[
                  editTodoModalStyles.modalInputLabelText,
                  focusedField === 'title' &&
                    editTodoModalStyles.modalInputFocusedLabelText,
                ]}>
                {APP_TEXTS.todoTitleInputLabel}
              </Text>
            )}
            {titleError !== '' && (
              <Text style={editTodoModalStyles.modalInputErrorText}>
                {titleError}
              </Text>
            )}
          </View>
          <View style={editTodoModalStyles.inputContainer}>
            <TextInput
              style={[
                editTodoModalStyles.modalTextInput,
                focusedField === 'description' &&
                  editTodoModalStyles.modalFocusedInput,
              ]}
              value={description}
              onChangeText={setDescription}
              placeholder={APP_TEXTS.todoDescPlaceholder}
              onFocus={() => setFocusedField('description')}
              onBlur={() => setFocusedField('')}
              multiline
            />
            {description !== '' && (
              <Text
                style={[
                  editTodoModalStyles.modalInputLabelText,
                  focusedField === 'description' &&
                    editTodoModalStyles.modalInputFocusedLabelText,
                ]}>
                {APP_TEXTS.todoDescInputLabel}
              </Text>
            )}
          </View>
          <View style={editTodoModalStyles.buttonContainer}>
            <Pressable
              style={editTodoModalStyles.editTodoButton}
              onPress={handleEditTodo}>
              <Text style={editTodoModalStyles.editTodoButtonText}>
                {APP_TEXTS.editTodoText}
              </Text>
            </Pressable>
            <Pressable
              style={editTodoModalStyles.cancelTodoButton}
              onPress={handleCloseModal}>
              <Text style={editTodoModalStyles.cancelTodoButtonText}>
                {APP_TEXTS.cancelTodoText}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
