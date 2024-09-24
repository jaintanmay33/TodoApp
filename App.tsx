import React, {useState, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import appStyles from './AppStyles';
import Header from './src/components/Header/Header';
import TodoItem from './src/components/TodoItem/TodoItem';
import TodoItemSeparator from './src/components/TodoItemSeparator/TodoItemSeparator';
import AddTodoButton from './src/components/AddTodoButton/AddTodoButton';
import EmptyComponent from './src/components/EmptyComponent/EmptyComponent';
import AddTodoModal from './src/components/AddTodoModal/AddTodoModal';
import {TodoItem as TodoItemType} from './src/utilities/types';

export default function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showAddModal = () => {
    setIsModalVisible(true);
  };

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

  const itemSeparator = useMemo(() => TodoItemSeparator, []);
  const emptyComponent = useMemo(() => EmptyComponent, []);

  return (
    <View style={appStyles.container}>
      <Header />
      <View style={appStyles.listContainer}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TodoItem
              item={item}
              handleEditTodos={handleEditTodos}
              handleDeleteTodos={handleDeleteTodos}
            />
          )}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={emptyComponent}
          keyExtractor={item => item.id.toString()}
          extraData={todos}
        />
      </View>
      <AddTodoButton onPress={showAddModal} />
      <AddTodoModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleAddTodos={handleAddTodos}
      />
    </View>
  );
}
