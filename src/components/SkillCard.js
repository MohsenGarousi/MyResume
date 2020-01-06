import React, { Component } from 'react';
import './SkillCard.css';

class SkillCard extends Component {
    render() {
        const { skill } = this.props;
        return (
            <div className="card">
                <div className="image-wrapper">
                    <img className="img" src={skill.content.image} />
                </div>
                <div className="skill-title-wrapper">
                    <h4>{skill.content.title}</h4>
                </div>
                {/* <div>
            <img src="src/images/logo192.png"/>
            </div> */}
            </div>
        )
    }
}

export default SkillCard