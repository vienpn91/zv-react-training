const TODO_INSERT = 'todo/TODO_INSERT';
const TODO_DELETE = 'todo/TODO_DELETE';
const TODO_COMPLETED = 'todo/TODO_COMPLETED';

const insertTodo = (insertItem) => ({
  type: TODO_INSERT,
  insertItem
});

const deleteTodo = (deleteItem) => ({
  type: TODO_DELETE,
  deleteItem
});

const completedTodo = (completed) => ({
  type: TODO_COMPLETED,
  completed
});

export const actions = {
  insertTodo,
  deleteTodo,
  completedTodo
}

const getCount = ({ todoabc }) => todoabc.todolist;

export const selectors = {
  getCount,
}

const initialState = {
  todolist: [
    { 
      noted: 'Handling More Actions',
      status: false
    },
    { 
      noted: 'Designing the State Shape',
      status: true
    },
  ],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case TODO_INSERT: { 
      // data input
      const insertNewItem = action.insertItem;
      //insert new item
      const newToDo = [...state.todolist, insertNewItem];

      const newState = {
        ...state,
        todolist: newToDo,
      }
      return newState;
    }    
    case TODO_DELETE: {
      const deleteItem = action.deleteItem;
      const filterTodo = state.todolist.filter((val,index)=> index !== deleteItem);
      const newState = {
        ...state,
        todolist: filterTodo
      }
      return newState;
    }    
    case TODO_COMPLETED: {
      console.log(action)
      const completedIdex = action.completed;
      const completedTodo = state.todolist.map((todo, index)=>{
        if (index === completedIdex) {
          return {
            ...todo,
            status: !todo.status
          }
        }
        return todo;
      })
      const newState = {
        ...state,
        todolist: completedTodo
      }
      return newState
    }    
    default: return state;
  }
}
