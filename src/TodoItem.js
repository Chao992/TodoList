import React,{Component} from 'react';

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        {/*how child receive data from the father*/}
        const { content } =  this.props;
        return(
            <div
                onClick={this.handleClick}>
                {content}
            </div>
        )

    }

    handleClick(){
        {/*how child receive function from the father*/}
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}
export default TodoItem;