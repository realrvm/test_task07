import React from "react";
import styled from "styled-components";

import Forms from "./Forms";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;
    @media (max-width: 660px) {
        margin-bottom: 32px;
    }
    button {
        align-self: flex-start;
        background: linear-gradient(91.83deg, #93e08c -1.93%, #78cebf 97.03%);
        border-radius: 3px;
        height: 42px;
        width: 192px;
        font-weight: 600;
        font-size: 15px;
        line-height: 18.28px;
        border: none;
        transition: 0.3 ease;
        &:hover {
            transform: scale(1.05);
            cursor: pointer;
        }
    }
`;

const StyledFormTitle = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 29.28px;
    margin-bottom: 24px;
`;

const StyledAgreement = styled.div`
    display: flex;
    input {
        width: 15px;
        height: 12px;
        border: 1px solid #c9c9c9;
        border-radius: 2px;
        outline: none;
        margin-bottom: 30px;
        cursor: pointer;
        @media (max-width: 660px) {
            margin-bottom: 40px;
        }
    }
`;
const StyledAgreementText = styled.span`
    font-weight: 400;
    font-size: 12px;
    margin-left: 5px;
    padding-top: 3px;
`;

const getAgreement = (fields) => {
    const [item] = fields.filter((field) => field.name === "agreement");
    const result = item.label.split("<a");
    return (
        <StyledAgreement>
            <input type={item.type} />
            <StyledAgreementText>
                {result[0].replace(/(<([^>]+)>)/gi, "")}
                <a href="*" style={{ color: "green", textDecoration: "none" }}>
                    {result[1]
                        .trimStart()
                        .replace(/^href[='"#?]+>/gi, "")
                        .replace(/(<([^>]+)>)/gi, "")}
                </a>
            </StyledAgreementText>
        </StyledAgreement>
    );
};

const Form = ({ form, handleClick = (f) => f }) => {
    const { title, fields, submit_button } = form;

    return (
        <>
            <StyledFormTitle>{title}</StyledFormTitle>
            <StyledForm>
                <Forms fields={fields} />
                {getAgreement(fields)}
                <button onClick={handleClick}>{submit_button.text}</button>
            </StyledForm>
        </>
    );
};
export default Form;
