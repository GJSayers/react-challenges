import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name: '',
            category: '',
            comments: ''
      }
    }

    handleNameChange = (event) => {
        let newValue = event.target.value
        console.log(newValue)
        this.setState({
            name: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        let newValue = event.target.value
        console.log(newValue)
        this.setState({
            comments: event.target.value
        })
    }
    handleCategoryChange = (event) => {
        let newValue = event.target.value
        console.log(newValue)
        this.setState({
            category: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div>
          <h2>Please fill out the below form:</h2>
          <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name: </label>
                    <input 
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                        id="id-name" 
                        name="name" 
                        type="text" 
                        />
                </div>
                <div>
                    <label htmlFor="id-category">Query Category </label>
                    <select 

                        value={this.state.category}
                        onChange={this.handleCategoryChange}
                        id="id-category" 
                        name="category">

                        <option value="website" >Website issue</option>
                        <option value="order" >Order issue</option>
                        <option value="general" >General enquiry</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments: </label>
                    <textarea 
                    value={this.state.comments}
                    onChange={this.handleCommentsChange}
                    id="id-comments" 
                    name="comments" />
                </div>
                 <input type="submit" value="submit" />
            </form>

      </div>
    )
  }
}

export default ControlledForm