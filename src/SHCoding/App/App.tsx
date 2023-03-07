import "./App.css";
import "./AppMedia.css";
import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function App(props: {title: string, html: any}) {
    return (
        <div id="app-div">
            <Header />
            <div id="app-content">
                <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{__html: props.html}}/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
