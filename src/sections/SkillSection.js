import React, { Component } from 'react';
import Fullpage from '../components/Fullpage';
import data from "../../src/data";
import SkillCard from '../components/SkillCard';
import './SkillSection.css';

class SkillSection extends Component {
    render() {
        return (
            <div>
                <Fullpage className="third">
                    <h3>
                        {data.sections[1].title}
                    </h3>
                    <div className="cards-wrapper">
                        {data.sections[1].items.map(item => {
                            return (
                                <SkillCard skill={item}/>
                            );
                        })}
                    </div>
                </Fullpage>
            </div>
        )
    }
}

export default SkillSection