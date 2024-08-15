import styled from "styled-components"
import { TodoInputType, TodoType } from "../types/TodoType";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetTodoIds, useGetTodos } from "../hooks/queries";
import { useCreateTodo, useDeleteTodo, useToggleUpdataTodo } from "../hooks/mutations";

export default function Todo() {
    const { register, handleSubmit, reset } = useForm<TodoType>();
    const todoIds = useGetTodoIds();
    const todos = useGetTodos(todoIds.data ?? []);

    const updataTodoMutation = useToggleUpdataTodo();
    const createTodoMutation = useCreateTodo();
    const deleteTodoMutation = useDeleteTodo();

    const handleUpdateToggleTodo = (id: number | undefined) => {
        if (id) {
            updataTodoMutation.mutate(id);
        }
    }

    const handleCreateTodo: SubmitHandler<TodoInputType> = (data) => {
        createTodoMutation.mutate(data);

        reset();
    }

    const handleDeleteTodo = (id: (number | undefined)) => {
        if (id) {
            deleteTodoMutation.mutate(id);
        }
    }

    return (
        <StyledTodo>
            <form className="sec make-todo" onSubmit={handleSubmit(handleCreateTodo)}>
                <input type="text" {...register("title")} placeholder="Title" />
                <input type="text" {...register("description")} placeholder="Description" />
                <input type="submit" value={createTodoMutation.isPending ? "만드는중..." : "만들기"} />
            </form>
            <div className="sec just-one-todo">
            </div>

            <ul className="sec todos">
                {todos.map(({ data }, i) => {
                    return <li key={data?.id ?? i + 1000}>
                        <StyledTodoTitle $isDone={data?.done!}>
                            (id: {data?.id}){data?.title}:
                        </StyledTodoTitle>
                        <span>{data?.description}</span>
                        <button onClick={() => handleUpdateToggleTodo(data?.id)}>{data?.done ? "다시하기" : "완료하기"}</button>
                        <button onClick={() => handleDeleteTodo(data?.id)}>삭제</button>
                    </li>
                })}
            </ul>
        </StyledTodo>
    )
}

const StyledTodo = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input{
            width: 50%;
        }
    }

    .sec{
        flex: 1;
        font-size: 2rem;
        border: 1px solid red;
        min-height: 100vh;
    }

    .just-one-todo{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .todos{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li{
        display: flex;
    }
`;

const StyledTodoTitle = styled.h4<{ $isDone: boolean }>`
    color: ${({ $isDone }) => $isDone ? "red" : "black"};
`;