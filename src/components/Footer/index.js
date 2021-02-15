import React from 'react';
import './Footer.css';
class Footer extends React.Component {
    render() {
        return (
            <div className="turn">Player {this.props.turn}'s turn</div>
        );
    }
}
export default Footer;