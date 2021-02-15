import React from "react";
import styled from "styled-components";

const StyledGridComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    margin-top: 40px;
    margin-bottom: 40px;
    @media (max-width: 740px) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;
const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledGridTitle = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 29.28px;
    color: #323232;
`;

const StyledGridText = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 19, 6px;
`;

const splitTextJSON = (text) => {
    const splittedText = text.split("</p>").filter((e) => e.length > 0);
    return splittedText.map((item) => item.replace(/(<([^>]+)>)/gi, ""));
};

const GridComponent = ({ grid = [] }) => {
    return (
        <StyledGridComponent>
            {grid.map((item, i) => {
                const { title, text } = item.metadata;
                return (
                    <StyledColumn key={i}>
                        <StyledGridTitle>{title}</StyledGridTitle>
                        {splitTextJSON(text).map((elem, indx) => {
                            return (
                                <StyledGridText key={indx}>
                                    {elem}
                                </StyledGridText>
                            );
                        })}
                    </StyledColumn>
                );
            })}
        </StyledGridComponent>
    );
};
export default GridComponent;
