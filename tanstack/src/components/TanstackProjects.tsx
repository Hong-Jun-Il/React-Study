import styled from "styled-components"
import { useGetProjects } from "../hooks/queries";
import { ProjectType } from "../types/ProjectType";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TanstackProjects() {
    const navigate = useNavigate();
    const pageParam: number = Number(new URLSearchParams(location.search).get("page")) || 1;

    const [currentPage, setCurrentPage] = useState<number>(pageParam ?? 1);
    const { data, isPlaceholderData } = useGetProjects(currentPage);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > (data?.totalPages ?? 1)) {
            return;
        }
        setCurrentPage(newPage);
        navigate(`/project?page=${newPage}`);
    }

    const btnsPerGroup: number = 5;
    const startPage: number = Math.floor((currentPage - 1) / btnsPerGroup) * btnsPerGroup + 1;
    const endPage: number = Math.min(startPage + btnsPerGroup - 1, data?.totalPages ?? 0);

    const PaginationBtns: number[] = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <StyledProducts>
            {data?.items?.map((project: ProjectType) => {
                return <li key={project?.id}>
                    {project?.name}
                </li>
            })}

            <StyledPaginationBtnsWrapper>
                <button onClick={() => handlePageChange(startPage - 1)} disabled={startPage === 1}>이전</button>
                <ul>
                    {PaginationBtns.map((page: number) => {
                        return <StyledPaginationBtn key={page} $isCurrent={currentPage === page} onClick={()=>handlePageChange(page)}>
                            <button>{page}</button>
                        </StyledPaginationBtn>
                    })}
                </ul>
                <button onClick={() => {
                    if (!isPlaceholderData) {
                        handlePageChange(startPage + btnsPerGroup);
                    }
                }} disabled={isPlaceholderData || endPage === data?.totalPages}>다음</button>
            </StyledPaginationBtnsWrapper>
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

const StyledPaginationBtnsWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;

    ul{
        display: flex;
    }
`;

const StyledPaginationBtn = styled.li<{ $isCurrent: boolean }>`
    button{
        color: ${({$isCurrent})=>$isCurrent ? "#f10cd3a6" : "black"};;
    }
`