import actorData from '../data/actorData.json'
import React from 'react'

class Actor extends React.Component{
    this.state = {
        data: actorData
    }

render() 
    return (

        <div>
            <button onClick={this.addRandom}>Add Contact</button>
            <button onClick={this.sortName}>Sort by Name</button>
            <button onClick={this.sortPop}>Sort by Popularity</button>
        </div>
            
    )


export default actor;