import React, {Component} from "react";
import httpClient from "../httpClient.js"

class NewBar extends Component {

  state = {
    fields: { 
        name: '', 
        address: '' 
    }
  }

  handleFormChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }
  
  onFormSubmit(evt) {
    evt.preventDefault()
    httpClient.createBar(this.state.fields).then((apiResponse) => {
        this.props.history.push("/bars")
    })
}

  render() {
    const { name, address } = this.state.fields 
    return (
      <div className="NewBar">
        <h1>Add A Bar</h1>
        <form onChange={this.handleFormChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
          <input name="name" type="text" placeholder="Name" value={name} />
          <input name="address" type="text" placeholder="Address" value={address} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewBar