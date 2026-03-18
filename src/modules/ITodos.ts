export interface ITodos {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ITodosGeneral {
  todos: ITodos[];
  total: number;
  skip: number;
  limit: number;
}