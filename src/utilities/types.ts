import {GestureResponderEvent} from 'react-native';

export type TodoItem = {
  id: number;
  title: string;
  description?: string;
};

export type TodoItemProps = {
  item: TodoItem;
  handleEditTodos: (id: number, title: string, description?: string) => void;
  handleDeleteTodos: (todoId: number) => void;
};

export type AddTodoProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export type AddTodoModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  handleAddTodos: (title: string, description?: string) => void;
};

export type EditTodoModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  handleEditTodos: (id: number, title: string, description?: string) => void;
  todoItem: TodoItem;
};

export type DeleteTodoModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  handleDeleteTodos: (todoId: number) => void;
  todoId: number;
};
