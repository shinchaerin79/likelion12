import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled(NavLink)`
text-decoration: none;
color: black;
&.active{
    color:blue;
}
`;

export default function Header() {
    return (
        <>
        <Nav to='/'>HOME</Nav>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav to='/intro'>INTRO</Nav>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav to='/todolist'>TO-DO LIST</Nav>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav to='/study'>STUDY</Nav>

        </>
    );
}