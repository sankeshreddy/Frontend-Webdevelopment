import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";
//header image
const Showcase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            
            <div className="overlay"></div>
            <div className="showcase-content">
                
                {/* <h2 className="text-primary showcaseh">
                
                "Today a reader, tomorrow a leader." – Margaret Fuller

                </h2> */}
                
                
                {/* <SearchInputForm darkTheme={ true }/>   */}
            </div>
            
        </section>
    )
}

export default Showcase;