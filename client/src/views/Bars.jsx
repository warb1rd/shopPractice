import React, {Component} from "react";
import httpClient from "../httpClient"

class Bars extends Component{                               //Create a Bars class that extents component with a render method that returns a div
    state = { 
		bars: []
	}

	componentDidMount(){
        httpClient.getBars().then((apiResponse) => {
            this.setState({
                bars: apiResponse.data
            })
        })
    }
    
    render(){
        const { bars } = this.state
        return(
            <div className="Bars">
            <h1>BAR LIST</h1>
            <ul>
            {bars.map((b) => {
                return(
                
                   <li key={b._id}>{b.name} - {b.user.name}</li>
                )
            })}
            </ul>
            </div>
        )
    }
}

export default Bars