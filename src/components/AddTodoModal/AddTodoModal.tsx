import React, {useState} from 'react';
import {Text, View, Modal, TextInput, Pressable} from 'react-native';
import {AddTodoModalProps} from '../../utilities/types';
import addTodoModalStyles from './AddTodoModalStyles';
import APP_TEXTS from '../../utilities/appTexts';

export default function AddTodoModal({
  isModalVisible,
  setIsModalVisible,
}: AddTodoModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleAddTodo = () => {
    console.log({title, description});
  };

  const resetData = () => {
    setTitle('');
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
          <TextInput
            style={[
              addTodoModalStyles.modalTextInput,
              focusedField === 'title' && addTodoModalStyles.modalFocusedInput,
            ]}
            value={title}
            onChangeText={setTitle}
            placeholder={APP_TEXTS.todoTitlePlaceholder}
            onFocus={() => setFocusedField('title')}
            onBlur={() => setFocusedField('')}
          />
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
