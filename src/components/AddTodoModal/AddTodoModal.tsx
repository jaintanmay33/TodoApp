import React, {useState} from 'react';
import {Text, View, Modal, TextInput, Pressable} from 'react-native';
import {AddTodoModalProps} from '../../utilities/types';
import addTodoModalStyles from './AddTodoModalStyles';
import APP_TEXTS from '../../utilities/appTexts';
import {validateTitle} from '../../utilities/validations';

export default function AddTodoModal({
  isModalVisible,
  setIsModalVisible,
  todos,
  setTodos,
}: AddTodoModalProps) {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleAddTodo = () => {
    if (!title || titleError) {
      setTitleError(validateTitle(title));
    } else {
      const id = Math.floor(Math.random() * 10000000000);
      setTodos([...todos, {id, title, description}]);
      resetData();
    }
  };

  const resetData = () => {
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
      onRequestClose={resetData}>
      <View style={addTodoModalStyles.modalContainer}>
        <View style={addTodoModalStyles.modalContent}>
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
              onPress={resetData}>
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
