import type {ITodos, ITodosGeneral} from "../modules/ITodos.ts";

const endpointTodos = import.meta.env.VITE_BASE_URL + '/todos'


 export const getTodos = async():Promise<ITodos[]> => {

    const todosObject:ITodosGeneral = await fetch(endpointTodos)
        .then(res => res.json())
    const {todos}:ITodosGeneral = todosObject
    return todos

}

