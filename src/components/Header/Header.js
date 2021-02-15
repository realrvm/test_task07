import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.nav`
    width: 100%;
    height: 70px;
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.25);
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    & > ul {
        width: 1220px;
        margin: 0 auto;
        list-style: none;
        display: flex;
    }
`;

const StyledHeaderHome = styled(NavLink)`
    font-weight: 600;
    font-size: 16px;
    line-height: 19.5px;
    text-decoration: none;
    color: black;
    opacity: 0.4;
    outline: none;
    &.active {
        opacity: 1;
        text-decoration: underline;
    }
`;

const StyledHeaderAbout = styled(StyledHeaderHome)`
    margin-left: 60px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <ul>
                <li>
                    <StyledHeaderHome
                        to="/test_task07"
                        exact
                        activeClassName="active"
                    >
                        Тестовое задание
                    </StyledHeaderHome>
                </li>
                <li>
                    <StyledHeaderAbout
                        to="/test_task07/about"
                        activeClassName="active"
                    >
                        About
                    </StyledHeaderAbout>
                </li>
            </ul>
        </StyledHeader>
    );
};

export default Header;
