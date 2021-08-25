import React, {Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css'

class TodoList extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			inputValue:'',
			list:[]
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
	}
	
	render(){
		return (
			<Fragment>
			<div>
				{/*avoid 'for' keyword same as loop */}
				<label htmlFor= "insertArea">Input   </label>
				{/*below is input frame*/}
				<input
					className ='input'
					value={this.state.inputValue}
					onChange={this.handleInputChange}
				/>
			<button onClick={this.handleBtnClick}>hand in</button>
			</div>
			<ul>
				{this.getTodoItem()}
			</ul>
			</Fragment>
		)
	}

	getTodoItem(){
		return this.state.list.map((item, index) => {
			return (
				<div key={index}>
					{/*how father pass data to the child*/}
					<TodoItem
						content={item}
						index={index}
						deleteItem={this.handleItemDelete}
					/>
				</div>
			)
		})
	}

	handleInputChange(e){
		const value = e.target.value;
		this.setState(() => ({
			inputValue: value
		}));
		//this.setState({
		//	inputValue: e.target.value
		//})
	}
	handleBtnClick(){
		this.setState((prevState) => ({
			list:[...prevState.list, prevState.inputValue],
			inputValue:''
		}));
		//this.setState({
		//	list:[...this.state.list, this.state.inputValue],
		//	inputValue:''
		//})
	}
	handleItemDelete(index){
		//immutable state

		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index,1);
			return {list}
		});
		//this.setState({
		//	list: list
		//})
	}
}

export default TodoList;