    import { configureStore, createSlice } from "@reduxjs/toolkit";

    let nextId = 2;
    const initialState = {
        todos: [{
            id: 1,
            text: "밥먹기",
            done: true,
            until: "2024-07-11"
        }],
        counter: 0,
        text: ""
    };

    const testSlice = createSlice({
        name: "todos",
        initialState,
        reducers: {
        addTodo(state, action){
                state.todos.push({
                    id: nextId++,
                    text: action.payload.text,
                    done: false,
                    until: action.payload.until
                });
        },
        removeTodo(state, action){
                state.todos = state.todos.filter(todo=>todo.id!==action.payload)
        },
        toggleTodo(state, action){
            const todo = state.todos.find(todo => todo.id === action.payload);
        
            todo.done = !todo.done;

        },
        increase(state,action){
                state.counter+=1;
        },
        decrease(state, action){
                state.counter-=1;
        },
        resetCounter(state, action){
                state.counter = 0;
        },
        setText(state, action){
                state.text = action.payload;
        }
        }
    });

    export const store = configureStore({
        reducer: testSlice.reducer
    });

    export const testActions = testSlice.actions;