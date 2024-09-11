import { Link } from "react-router-dom";

export default function LandingPage(){
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="text-3xl">랜딩 페이지(대충 소개하는 글)</div>
            <Link to="/signin" className="text-4xl">로그인하러 가기</Link>
        </section>
    )
}