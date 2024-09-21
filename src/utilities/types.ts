import {GestureResponderEvent} from 'react-native';

export type TodoItemProps = {
  item: {
    text: string;
    key: number;
  };
};

export type AddTodoProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export type AddTodoModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
};
