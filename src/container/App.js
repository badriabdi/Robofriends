import React,{Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import ErroBoundry from '../component/ErroBoundry';
import './App.css';
import Scroll from '../component/Scroll'

class App extends Component  {
	constructor(){
		super()
		this.state = {
			robots:[],
			Searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		})
		.then(users =>{
			this.setState({robots: users})
		});
		
	}
	onSearchChange = (event)=>{
		this.setState ({Searchfield:event.target.value})

	}

	render(){
		const {robots,Searchfield} = this.state;
		const filteredrobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(Searchfield.toLowerCase())

		})

	 if (!robots.length){
	 	return <h1>loading</h1>
	 }else{

	 	return (
		<div className='tc'>
		<h1 className='f1'>Robotfriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErroBoundry>
		< CardList robots={filteredrobots}/>
		</ErroBoundry>
		</Scroll>
		</div>
		)
	}
}

	 }

	


export default App;


												
							
