import styled from "styled-components"
import { useGetProjects } from "../hooks/queries";
import { ProjectType } from "../types/ProjectType";
import { useState } from "react";

export default function TanstackProjects() {
    const [currentPage, setCurrentPage] = useState(1);
    const {data, isPending, error, isError, isPlaceholderData, isFetching} = useGetProjects(currentPage);

    // 페이지네이션 라이브러리 써서 처리하고 max page 값도 설정 해 볼 것, 클릭 후 페이지 이동, 돌아왔을 때 currentpage가 변동이 없는지 확일할 것

    return (
        <StyledProducts>
            {data?.map((project: ProjectType) => {
                return <li key={project?.id}>
                    {project?.name}
                </li>
            })}

            <StyledPagenationBtn>
                <button onClick={()=>setCurrentPage(prev => Math.max(prev - 1, 1))}>이전</button>
                <span>{currentPage}</span>
                <button onClick={()=>{
                    if(!isPlaceholderData){
                        setCurrentPage(prev => prev + 1);
                    }
                }} disabled={isPlaceholderData}>다음</button>
            </StyledPagenationBtn>
        </StyledProducts>
    )
}

const StyledProducts = styled.ul`
    width: 100%;
    min-height: 100vh;
    background-color: aliceblue;
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StyledPagenationBtn = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    width: 100px;
    justify-content: space-between;
`;