import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import state from "./store/page.json";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

const StyledApp = styled.div``;

function App() {
    const [data] = useState(state);
    return (
        <Router>
            <StyledApp>
                <Header />
                <Switch>
                    <Route
                        path="/test_task07"
                        render={() => <Home data={data} />}
                        exact
                    />
                    <Route path="/test_task07/about" component={About} />
                </Switch>
                <Footer />
            </StyledApp>
        </Router>
    );
}

export default App;
