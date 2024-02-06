import React from 'react'
import './Homepage.css'

const Skills = () => {
    return (
        <div id="Skills">
            <div className="header">
                <h1>SKILLS</h1>
            </div>

            <div className="img-skills">
                <div className="images">
                    <div>
                        <img src="https://img.freepik.com/free-icon/html-5_318-566077.jpg" alt="HTML" />
                    </div>
                    <div className="skills-name">
                        <h2>HTML</h2>
                    </div>
                </div>
                <div className="images">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                            alt="HTML" />
                    </div>
                    <div className="skills-name">
                        <h2>CSS</h2>
                    </div>
                </div>
                <div className="images">
                    <div>
                        <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                            alt="HTML" />
                    </div>
                    <div className="skills-name">
                        <h2>JAVASCRIPT</h2>
                    </div>
                </div>
                <div className="images">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            alt="HTML" />
                    </div>
                    <div className="skills-name">
                        <h2>REACT</h2>
                    </div>
                </div>
                <div className="images">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
                            alt="HTML" />
                    </div>
                    <div className="skills-name">
                        <h2>NODE.JS</h2>
                    </div>
                </div>
                <div className="images">
                    <div>
                        <img src="data:image/png;base64,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"
                            alt="HTML" />
                    </div>
                    <div className="skills-name">
                        <h2>MONGODB</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills