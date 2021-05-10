import React from "react"
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className= "header-wrapper">
            <div className= "main-info">
                
                <Typed
                className="typed-text"
                strings={["Web Design", "Web Development", "Software Engineering", "Graphic Design"]}
                typeSpeed= {50}
                backSpeed= {60}
                loop
                >

                </Typed>
            
            </div>
        </div>
    )
}

export default Header
