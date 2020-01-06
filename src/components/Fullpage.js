import React, {Component} from 'react';
import './Fullpage.css';

class Fullpage extends Component {
    render() {
        const {children} = this.props
        return (
            <div className={`fullpage ${this.props.className || ''}`}>
                {/* {this.props.children} */}
                {children}
            </div>
        )
    }
}

export default Fullpage