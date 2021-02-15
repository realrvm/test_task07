import React from "react";
import Carousel from "./Carousel";
import styled from "styled-components";

const StyledGalleryTitle = styled.h1`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #323232;
    margin-bottom: 24px;
`;

const GalleryComponent = ({ gallery }) => {
    const { title, images } = gallery;

    return (
        <>
            <StyledGalleryTitle>{title}</StyledGalleryTitle>
            <Carousel images={images} />
        </>
    );
};
export default GalleryComponent;
