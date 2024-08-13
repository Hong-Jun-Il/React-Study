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
            {todosIdsQuery.data.map((id)=>{
                return <p key={id}>{id}</p>
            })}
        </>
    )
}