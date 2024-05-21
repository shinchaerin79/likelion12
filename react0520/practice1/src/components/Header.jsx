import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled(NavLink)`
text-decoration: none;
color: black;
&.active{
    color:red;
}
`;

export default function Header() {
    return (
        <>
        <Nav to='/'>홈 가기</Nav>
        <Nav to='/intro'>인트로</Nav>
        </>
    );
}