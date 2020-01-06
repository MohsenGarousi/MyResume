import React, { Component } from 'react';
import Fullpage from '../components/Fullpage';
import data from "../../src/data";
import './AboutSection.css';

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <h3>
            {data.sections[0].title}
          </h3>
          <p className="paragraphs">
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>
            })}
          </p>
        </Fullpage>
      </div>
    )
  }
}

export default AboutSection