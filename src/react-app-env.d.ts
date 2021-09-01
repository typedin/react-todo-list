/// <reference types="react-scripts" />
interface Todo {
  id: number;
  title: string;
  isComplete: boolean;
  isEditing: boolean;
}

type BlogParams = {
  id: string;
};

interface Route {
  path: string;
  name: string;
  exact: boolean;
  component: JSX.Element;
}
