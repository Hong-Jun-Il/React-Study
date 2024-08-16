import styled from "styled-components"
import { useGetProjects } from "../hooks/queries";
import { ProjectType } from "../types/ProjectType";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// 페이지네이션 라이브러리 써서 처리하고 max page 값도 설정 해 볼 것, 클릭 후 페이지 이동, 돌아왔을 때 currentpage가 변동이 없는지 확일할 것

export default function TanstackProjects() {
    const pageParam: number = Number(new URLSearchParams(location.search).get("page")) || 1;
    const [currentPage, setCurrentPage] = useState<number>(pageParam ?? 1);
    const navigate = useNavigate();
    const { data, isPlaceholderData } = useGetProjects(currentPage);

    const handlePageChange = (newPage: number) => {
        if(newPage < 1 || newPage > (data?.totalPages ?? 1)){
            return;
        }
        setCurrentPage(newPage);
        navigate(`/project?page=${newPage}`);
    }

    return (
        <StyledProducts>
            {data?.items?.map((project: ProjectType) => {
                return <li key={project?.id}>
                    {project?.name}
                </li>
            })}

            <StyledPaginationBtn>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>이전</button>
                <ul>
                    {Array.from({ length: data?.totalPages ?? 0 }, (_, i) => i + 1).map((page: number) => {
                        return <li key={page}>
                            <button onClick={()=>handlePageChange(page)}>{page}</button>
                        </li>
                    })}
                </ul>
                <button onClick={() => {
                    if (!isPlaceholderData) {
                        handlePageChange(currentPage + 1);
                    }
                }} disabled={isPlaceholderData || currentPage === data?.totalPages}>다음</button>
            </StyledPaginationBtn>
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

const StyledPaginationBtn = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;

    ul{
        display: flex;
    }
`;