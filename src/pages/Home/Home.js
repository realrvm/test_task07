import React from "react";
import GalleryComponent from "../../components/GalleryComponent";
import GridComponent from "../../components/GridComponent";
import Form from "../../components/Form";

const Home = ({ data }) => {
    const { components, form } = data;
    const [gallerycomponent, gridcomponent] = components;
    return (
        <div className="wrapper">
            <GalleryComponent gallery={gallerycomponent.metadata} />
            <GridComponent grid={gridcomponent.metadata.components} />
            <Form form={form} />
        </div>
    );
};

export default Home;
