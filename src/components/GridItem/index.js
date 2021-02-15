import React from "react";
import './GridItem.css';
class GridItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state={
    //         counter:0
    //     }
    //     this.handleClick=this.handleClick.bind(this);
    // }
    // // if u use normal function then this refference has lost. to overcome this u have to bind this.
    // handleClick=(e) => {
    //     // arrow function preserves the this value
    //     //this.state.counter++ does not work
    //     // if u want to change state then u have to use setState function
    //     this.setState({
    //         counter:this.state.counter+1
    //     });
    //     console.log('i am event of type',e);
    // };
    render() {
        return (
            <div className="grid-item" onClick={()=> {
                this.props.handlePlayerClick(this.props.row,this.props.col)
            }}>{this.props.colText}</div>
        )
    }
}
export default GridItem;