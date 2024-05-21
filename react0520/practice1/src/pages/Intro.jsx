import { Link } from "react-router-dom";
import { DUMMY } from "../data";

/*DUMMY 데이터 => 링크 => 이름, 전공 페이지를 만들 예정*/

export default function IntroPage() {
    return (
        <>
        <ul>
            {
                DUMMY.map((item)=>(
                    <li key={item.id}>
                        <Link to={`${item.id}`}>{item.name}</Link>
                    </li>
                ))
            }
        </ul>
        <Link to="/">홈 가기</Link>
        </>
    );
}