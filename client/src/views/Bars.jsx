import React, {Component} from "react";
import httpClient from "../httpClient"

class Items extends Component{                                                                                   //Create a Items class that extents component with a render method that returns a div
    state = { 
        items: [],
        currentUser: httpClient.getCurrentUser()
	}

	componentDidMount(){
        httpClient.getItems().then((apiResponse) => {
            this.setState({
                items: apiResponse.data
            })
        })
    }
    
    handleDelete(id){
        let { history } = this.props
        httpClient.deleteItem(id).then((apiResponse) => {
        console.log(history)
        this.setState({
            items: this.state.items.filter((b) => {
                return b._id !== id  
            })
        })
            // history.push("/")
        })
    }

    render(){
        const { items, currentUser } = this.state
        return(
            <div className="Items">
            <h1>ITEM LIST</h1>
            <ul>
            {items.map((b) => {
                return(
                <li key={b._id}>{b.name} - {b.user.name}{currentUser && <span><button onClick={this.handleDelete.bind(this,b._id)}>delete</button></span>}</li>
                )
            })}
            </ul>
            </div>
        )
    }
}

export default Items