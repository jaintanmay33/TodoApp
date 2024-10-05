import React, {useState} from 'react';
import {Text, View, Modal, TextInput, Pressable, Image} from 'react-native';
import {AddTodoModalProps} from '../../utilities/types';
import addTodoModalStyles from './AddTodoModalStyles';
import APP_TEXTS from '../../utilities/appTexts';
import {validateTitle} from '../../utilities/validations';
import icons from '../../utilities/icons';
import {COLORS} from '../../utilities/constants';

export default function AddTodoModal({
  isModalVisible,
  setIsModalVisible,
  handleAddTodos,
}: AddTodoModalProps) {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleAddTodo = () => {
    if (!title || titleError) {
      setTitleError(validateTitle(title));
    } else {
      handleAddTodos(title, description);
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setTitle('');
    setTitleError('');
    setDescription('');
    setFocusedField('');
    setIsModalVisible(false);
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={handleCloseModal}>
      <View style={addTodoModalStyles.modalContainer}>
        <View style={addTodoModalStyles.modalContent}>
          <Pressable
            onPress={handleCloseModal}
            style={addTodoModalStyles.closeIconContainer}>
            <Image
              source={icons.closeIcon}
              style={addTodoModalStyles.closeIcon}
              resizeMode="contain"
            />
          </Pressable>
          <Text style={addTodoModalStyles.modalTitle}>
            {APP_TEXTS.addTodoText}
          </Text>
          <View style={addTodoModalStyles.inputContainer}>
            <TextInput
              style={[
                addTodoModalStyles.modalTextInput,
                focusedField === 'title' &&
                  addTodoModalStyles.modalFocusedInput,
              ]}
              value={title}
              onChangeText={(text: string) => {
                setTitle(text);
                setTitleError(validateTitle(text));
              }}
              placeholder={APP_TEXTS.todoTitlePlaceholder}
              placeholderTextColor={COLORS.grey}
              cursorColor={COLORS.primaryColor}
              onFocus={() => setFocusedField('title')}
              onBlur={() => setFocusedField('')}
            />
            {title !== '' && (
              <Text
                style={[
                  addTodoModalStyles.modalInputLabelText,
                  focusedField === 'title' &&
                    addTodoModalStyles.modalInputFocusedLabelText,
                ]}>
                {APP_TEXTS.todoTitleInputLabel}
              </Text>
            )}
            {titleError !== '' && (
              <Text style={addTodoModalStyles.modalInputErrorText}>
                {titleError}
              </Text>
            )}
          </View>
          <View style={addTodoModalStyles.inputContainer}>
            <TextInput
              style={[
                addTodoModalStyles.modalTextInput,
                focusedField === 'description' &&
                  addTodoModalStyles.modalFocusedInput,
              ]}
              value={description}
              onChangeText={setDescription}
              placeholder={APP_TEXTS.todoDescPlaceholder}
              cursorColor={COLORS.primaryColor}
              placeholderTextColor={COLORS.grey}
              onFocus={() => setFocusedField('description')}
              onBlur={() => setFocusedField('')}
              multiline
            />
            {description !== '' && (
              <Text
                style={[
                  addTodoModalStyles.modalInputLabelText,
                  focusedField === 'description' &&
                    addTodoModalStyles.modalInputFocusedLabelText,
                ]}>
                {APP_TEXTS.todoDescInputLabel}
              </Text>
            )}
          </View>
          <View style={addTodoModalStyles.buttonContainer}>
            <Pressable
              style={addTodoModalStyles.addTodoButton}
              onPress={handleAddTodo}>
              <Text style={addTodoModalStyles.addTodoButtonText}>
                {APP_TEXTS.addTodoText}
              </Text>
            </Pressable>
            <Pressable
              style={addTodoModalStyles.cancelTodoButton}
              onPress={handleCloseModal}>
              <Text style={addTodoModalStyles.cancelTodoButtonText}>
                {APP_TEXTS.cancelTodoText}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
