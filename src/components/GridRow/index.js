import React from 'react';
import GridItem from '../GridItem';
import './GridRow.css';
class GridRow extends React.Component {
    render() {
        return (
            <div className="grid-row">
                {this.props.rows.map((currCol,colIndex)=>{
                    return <GridItem 
                            col={colIndex} 
                            row={this.props.rowIndex} 
                            colText={currCol}
                            handlePlayerClick={this.props.handlePlayerClick}
                            />
                })}
            </div>
        )
    }
}
export default GridRow;