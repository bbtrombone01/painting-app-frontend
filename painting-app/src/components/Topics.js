import React from "react";
import Canvas from './Canvas.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const availTopics = ["happy", "sad", "confused", "excited"]
//this will be topics gotten via a fetch from backend. currently just a const as placeholder
//in order to dynamically render 

export default class Topics extends React.Component {
    state = {
        topicID: "",
        topicSelected: false,
        allTopics: this.props.allTopics
    }
    
    componentDidMount(){
        this.setState({topicSelected: false})
        
    }

    renderForm = () => {
        
        return <form onSubmit={(e) => this.handleSubmit(e)}>
                <label for="topics">Choose a Topic for Your Painting!</label><br></br>
                <select onChange={(e) => this.handleChange(e)} name="topics" id="topics">
                    <option value='blank'></option>
                    {this.props.allTopics.map(t => {
                    return <option value={`${t.id}`}>{t.topic}</option>
                    })}
                </select>
                 
                <button type="submit" value="Submit">Submit </button>
            </form>
    }

    renderCanvas = () => {
        return <Canvas topicID={this.state.topicID} userData={this.props.userData} addNewPainting={this.props.addNewPainting}/>
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            topicSelected: true
        })
    }
    
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({topicID: e.target.value})
    }



    render() {
        return(
            <div>
                {!this.state.topicSelected? this.renderForm() : this.renderCanvas()}
            </div>
        )
    }
}


//dropdown list with topics
//will need fetch request to get topics
//will then need to pass down as props