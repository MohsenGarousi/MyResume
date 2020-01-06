import React, { Component } from 'react';
import Fullpage from '../components/Fullpage';
import { SocialIcon } from 'react-social-icons';
import DownIcon from '../components/DownIcon';
import data from "../../src/data";
import './TitleSection.css';
import { Link, Element } from 'react-scroll'

class TitleSection extends Component {
    state = {
        color: 'white',
        cursor: 'none'
    }
    changeColor = () => {
        this.setState({
            color: this.state.color === 'white' ? 'yellow' : 'white',
            cursor: this.state.cursor === 'none' ? 'pointer' : 'none'
        })
    }
    render() {
        return (
            <div>
                <Fullpage className="first">
                    <h1 className="title"
                        style={{
                            color: this.state.color,
                            cursor: this.state.cursor
                        }}
                        onMouseOver={() => {
                            this.changeColor()
                        }}
                        onMouseLeave={() => {
                            this.changeColor()
                        }}
                    >{data.title}
                    </h1>
                    <div>
                        <h2>{data.subtitle}</h2>
                    </div>
                    <div className="icons-wrapper">
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div className="icon">
                                        <SocialIcon url={data.links[key]} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </Fullpage>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <DownIcon
                        icon={data.icons.down}
                        onClick={() => {
                            console.log('I am working')
                        }

                        }
                    />
                </Link>
                <Element name="about" className="element">
                    
                </Element>
            </div>

        )
    }
}

export default TitleSection