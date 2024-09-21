import {GestureResponderEvent} from 'react-native';

export type TodoItem = {
  id: number;
  title: string;
  description?: string;
};

export type TodoItemProps = {
  item: TodoItem;
};

export type AddTodoProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export type AddTodoModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
};
