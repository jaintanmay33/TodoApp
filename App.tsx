import React, {useState, useMemo, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import appStyles from './AppStyles';
import Header from './src/components/Header/Header';
import TodoItem from './src/components/TodoItem/TodoItem';
import CompletedTodoItem from './src/components/CompletedTodoItem/CompletedTodoItem';
import TodoItemSeparator from './src/components/TodoItemSeparator/TodoItemSeparator';
import AddTodoButton from './src/components/AddTodoButton/AddTodoButton';
import AddTodoModal from './src/components/AddTodoModal/AddTodoModal';
import {TodoItem as TodoItemType} from './src/utilities/types';
import APP_TEXTS from './src/utilities/appTexts';
import {storage} from './src/utilities/storage';
import {APP_SIZES} from './src/utilities/constants';

export default function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [completedTodos, setCompletedTodos] = useState<TodoItemType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const savedTodos = storage.getString('todos');
    const savedCompletedTodos = storage.getString('completedTodos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    if (savedCompletedTodos) setCompletedTodos(JSON.parse(savedCompletedTodos));
  }, []);

  useEffect(() => {
    storage.set('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    storage.set('completedTodos', JSON.stringify(completedTodos));
  }, [completedTodos]);

  const showAddModal = () => setIsModalVisible(true);

  const handleAddTodos = (title: string, description?: string) => {
    const id = Math.floor(Math.random() * 10000000000);
    setTodos([...todos, {id, title, description}]);
  };

  const handleEditTodos = (id: number, title: string, description?: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, title, description} : todo,
      ),
    );
  };

  const handleDeleteTodos = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const handleCompleteTodos = (
    todoId: number,
    todoTitle: string,
    todoDescription?: string,
  ) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
    setCompletedTodos([
      ...completedTodos,
      {id: todoId, title: todoTitle, description: todoDescription},
    ]);
  };

  const itemSeparator = useMemo(() => TodoItemSeparator, []);

  return (
    <View style={appStyles.container}>
      <Header />
      {todos.length === 0 && completedTodos.length === 0 && (
        <Text style={appStyles.emptyText}>{APP_TEXTS.emptyListText}</Text>
      )}
      {todos.length !== 0 && (
        <View style={[appStyles.listContainer, {marginTop: APP_SIZES.size16}]}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem
                item={item}
                handleEditTodos={handleEditTodos}
                handleDeleteTodos={handleDeleteTodos}
                handleCompleteTodos={handleCompleteTodos}
              />
            )}
            ItemSeparatorComponent={itemSeparator}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            extraData={todos}
          />
        </View>
      )}
      {completedTodos.length !== 0 && (
        <View style={appStyles.listContainer}>
          <Text style={appStyles.completedText}>Completed Todos</Text>
          <FlatList
            data={completedTodos}
            renderItem={({item}) => (
              <CompletedTodoItem
                item={item}
                handleEditTodos={handleEditTodos}
                handleDeleteTodos={handleDeleteTodos}
                handleCompleteTodos={handleCompleteTodos}
              />
            )}
            ItemSeparatorComponent={itemSeparator}
            keyExtractor={item => item.id.toString()}
            extraData={completedTodos}
          />
        </View>
      )}
      <AddTodoButton onPress={showAddModal} />
      <AddTodoModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleAddTodos={handleAddTodos}
      />
    </View>
  );
}
