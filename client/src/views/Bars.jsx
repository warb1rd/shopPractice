import React, {Component} from "react";
import httpClient from "../httpClient"

class Bars extends Component{                                                                                   //Create a Bars class that extents component with a render method that returns a div
    state = { 
        bars: [],
        currentUser: httpClient.getCurrentUser()
	}

	componentDidMount(){
        httpClient.getBars().then((apiResponse) => {
            this.setState({
                bars: apiResponse.data
            })
        })
    }
    
    handleDelete(id){
        let { history } = this.props
        httpClient.deleteBar(id).then((apiResponse) => {
        console.log(history)
        this.setState({
            bars: this.state.bars.filter((b) => {
                return b._id !== id  
            })
        })
            // history.push("/")
        })
    }

    render(){
        const { bars, currentUser } = this.state
        return(
            <div className="Bars">
            <h1>BAR LIST</h1>
            <ul>
            {bars.map((b) => {
                return(
                <li key={b._id}>{b.name} - {b.user.name}{currentUser && <span><button onClick={this.handleDelete.bind(this,b._id)}>delete</button></span>}</li>
                )
            })}
            </ul>
            </div>
        )
    }
}

export default Bars