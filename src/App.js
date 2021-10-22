import React, {Component} from "react";
import Cardlist from "./Cardlist";
import SearchBox from './SearchBox'
import { robots } from "./robots";
import'./App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
render() {
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
        <div className='tc'> 
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {
            !filteredRobots.length && <p className='f1'>No result found</p>
        }
        <Cardlist robots={filteredRobots}/>
        </div>
    )
}
}
export default App;