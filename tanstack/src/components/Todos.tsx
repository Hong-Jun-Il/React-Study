import { useTodosId } from "../api/queries";

export default function Todos() {
    const todosIdsQuery = useTodosId();

    if(todosIdsQuery.isPending){
        return <div>loading...</div>
    }

    if(todosIdsQuery.isError){
        return <div>error!</div>
    }
    
    return (
        <>
            <p>{todosIdsQuery.fetchStatus}</p>
            <p>{todosIdsQuery.status}</p>
            <ul>
                {todosIdsQuery.data?.map((todoId:number)=>{
                    return <li key={todoId}>{todoId}</li>
                })}
            </ul>
        </>
    )
}