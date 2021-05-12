import React from 'react'
import Image from "react-bootstrap/Image";
import Resume1 from "../assets/1.png"
import Resume2 from "../assets/2.png"

const Resume = () => {
    return (
        <div>
            <Image src={Resume1} fluid />
            <Image src={Resume2} fluid />
        </div>
    )
}

export default Resume
