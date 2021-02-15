import React from "react";
import styled from "styled-components";

const StyledForms = styled.div`
    display: grid;
    grid-template-areas:
        "one three five"
        "two four five";
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    margin-bottom: 30px;
    @media (max-width: 760px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "one two"
            "three four"
            "five five";
    }
    @media (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-areas:
            "one"
            "two"
            "three"
            "four"
            "five";
    }
`;
const StyledFormBase = styled.div`
    p {
        font-weight: 400;
        font-size: 12px;
    }
    input {
        height: 48px;
        width: 100%;
        border: 1px solid #c9c9c9;
        border-radius: 3px;
    }
`;

const StyledFormOne = styled(StyledFormBase)`
    grid-area: one;
`;

const StyledFormTwo = styled(StyledFormBase)`
    grid-area: two;
`;

const StyledFormThree = styled(StyledFormBase)`
    grid-area: three;
`;

const StyledFormFour = styled(StyledFormBase)`
    grid-area: four;
    input {
        text-align: right;
    }
`;

const StyledFormFive = styled(StyledFormBase)`
    grid-area: five;
    textarea {
        height: 130px;
        padding: 10px;
        width: 100%;
        border: 1px solid #c9c9c9;
        border-radius: 3px;
    }
`;

const layout = (field) => {
    return (
        <>
            {field.label === "Комментарий" ? (
                <p>{field.label} (не обязательно)</p>
            ) : (
                <p>{field.label}</p>
            )}
            {field.type === "textarea" ? (
                <textarea type={field.type} />
            ) : (
                <input type={field.type} required={field.required} />
            )}
        </>
    );
};

const createField = (field, indx) => {
    if (field.label === "Имя") {
        return <StyledFormOne key={indx}>{layout(field)}</StyledFormOne>;
    }
    if (field.label === "E-mail") {
        return <StyledFormTwo key={indx}>{layout(field)}</StyledFormTwo>;
    }
    if (field.label === "Телефон") {
        return <StyledFormThree key={indx}>{layout(field)}</StyledFormThree>;
    }
    if (field.label === "Дата записи") {
        return <StyledFormFour key={indx}>{layout(field)}</StyledFormFour>;
    }
    if (field.label === "Комментарий") {
        return <StyledFormFive key={indx}>{layout(field)}</StyledFormFive>;
    }
};

const Forms = ({ fields }) => {
    return (
        <StyledForms>
            {fields
                .filter((item) => item.name !== "agreement")
                .map((field, indx) => {
                    return createField(field, indx);
                })}
        </StyledForms>
    );
};
export default Forms;
