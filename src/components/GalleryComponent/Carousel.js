import React from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";

const StyledCarousel = styled.div`
    padding-bottom: 34px;
    margin-left: 20px;
    position: relative;
    @media (max-width: 1200px) {
        img {
            width: 85%;
        }
    }
    @media (max-width: 1100px) {
        margin-left: 50px;
        img {
            width: 95%;
        }
    }
    @media (max-witdh: 760px) {
        padding-bottom: 10px;
    }
    @media (max-width: 570px) {
        margin-left: 10px;
        img {
            width: 110%;
        }
    }
`;

const CarouseComponent = ({ images }) => {
    return (
        <StyledCarousel>
            <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1100,
                        },
                        items: 3,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 760,
                            min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1100,
                            min: 760,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                    },
                }}
                customDot={<CustomDot />}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img
                                src={`${process.env.PUBLIC_URL}/${image}`}
                                alt="photo"
                            />
                        </div>
                    );
                })}
            </Carousel>
        </StyledCarousel>
    );
};

const StyledCustomDotButton = styled.button`
    width: 12px;
    height: 12px;
    background: ${(props) => (props.active ? "#93E08C" : "#C9C9C9")};
    border-radius: 50%;
    border: none;
    margin: 0 8px;
    outline: none;
    cursor: pointer;
    @media (max-width: 760px) {
        display: none;
    }
`;

const CustomDot = ({ onClick, active }) => {
    return (
        <StyledCustomDotButton
            active={active}
            className={active ? "active" : "inactive"}
            onClick={onClick}
        ></StyledCustomDotButton>
    );
};

export default CarouseComponent;
