import actorData from '../data/actorData.json'
import React from 'react'

class Actor extends React.Component{
    this.state = {
        data: actorData
    }

render() 
    return (
        <div>
            <button onClick={this.addRandom}>Add Random Contact</button>
            <button onClick={this.sortName}>Sort by Name</button>
            <button onClick={this.sortPop}>Sort by Popularity</button>
            <table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.actor.map(elt => 
                            <tr>
                                <td>
                                    <img src={elt.pictureUrl} alt="" />
                                </td>
                                <td>
                                    <p>{elt.name}</p>
                                </td>
                                <td>
                                    <p>{elt.popularity.toFixed(2)}</p>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
            
        </div>
    )


export default actor;