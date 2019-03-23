import React, { Component } from 'react';
import './AddEditForm.css';

/**
 * Recieves ONE item text and id from MasterList
 * Renders a form to edit text of item
 * On submit, the edited text is sent up to App and added to myList
 */

class AddEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedText: this.props.text
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.notifyAdd(this.props.id, this.state.editedText);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <div className="AddEditForm">
                <form onSubmit={ this.handleSubmit }>
                    <input 
                        name="editedText" 
                        id="editedText" 
                        value={ this.state.editedText }
                        onChange={ this.handleChange }
                        type="number">
                    </input>
                    <button>Add to My List</button>
                </form>
            </div>
        );
    }
}

export default AddEditForm;
