import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import appStyles from './AppStyles';
import Header from './src/components/Header/Header';
import TodoItem from './src/components/TodoItem/TodoItem';
import TodoItemSeparator from './src/components/TodoItemSeparator/TodoItemSeparator';
import AddTodoButton from './src/components/AddTodoButton/AddTodoButton';
import EmptyComponent from './src/components/EmptyComponent/EmptyComponent';
import AddTodoModal from './src/components/AddTodoModal/AddTodoModal';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const itemSeparator = () => {
    return <TodoItemSeparator />;
  };

  const emptyComponent = () => {
    return <EmptyComponent />;
  };

  return (
    <View style={appStyles.container}>
      <Header />
      <View style={appStyles.listContainer}>
        <FlatList
          data={todos}
          renderItem={({item}) => <TodoItem item={item} />}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={emptyComponent}
        />
      </View>
      <AddTodoButton onPress={() => setIsModalVisible(true)} />
      <AddTodoModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </View>
  );
}
