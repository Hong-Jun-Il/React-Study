import styled from "styled-components";
import { useTodos, useTodosId } from "../api/queries";
import { useCreateTodo, useDeleteTodo, useUpdateTodo } from "../api/mutations";
import { SubmitHandler, useForm } from "react-hook-form";
import { Todo } from "../types/todo";

export default function Todos() {
    const todosIdsQuery = useTodosId();
    const todoQuery = useTodos(todosIdsQuery.data);

    const createTodoMutation = useCreateTodo();
    const updateTodoMutation = useUpdateTodo();
    const deleteTodoMutation = useDeleteTodo();

    const {register, handleSubmit} = useForm<Todo>();

    const handleCreateTodoSubmit:SubmitHandler<Todo> = (data)=>{
        createTodoMutation.mutate(data);
    }

    const handleMarkAsDoneSubmit = (data: Todo | undefined) => {
        if(data){
            updateTodoMutation.mutate(data);
        }
    }

    const handleDeleteTodo = (data: Todo | undefined)=>{
        if(data){
            deleteTodoMutation.mutate(data);
        }
    }

    return (
        <StyledTodoIds>
            <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
                <h4>New Todo: </h4>
                <input type="text" placeholder="Title" {...register("title")} />
                <br />
                <input type="text" placeholder="Description" {...register("description")} />
                <br />
                <input type="submit" disabled={createTodoMutation.isPending} value={createTodoMutation.isPending ? "만드는중..." : "만들기"} />
            </form>

            <ul className="todo">
                {todoQuery.map(({ data }) => {
                    return <li key={data?.id ?? Math.random() * 1000 + 1}>
                        <div>ID: {data?.id}</div>
                        <span>
                            <strong>Title: </strong> {data?.title}, {" "}
                            <strong>Description: </strong> {data?.description}
                            <button onClick={()=>{
                                handleMarkAsDoneSubmit(data)
                            }} disabled={data?.checked}>{data?.checked ? "Done" : "Mark as Done"}</button>
                            <button onClick={()=>handleDeleteTodo(data)}>delete</button>
                        </span>
                    </li>
                })}
            </ul>
        </StyledTodoIds>
    )
}

const StyledTodoIds = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    min-height: 100vh;
    width: 100%;

    .todo{
        font-size: 2rem;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`