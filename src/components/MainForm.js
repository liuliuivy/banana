import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.addItem(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label>
                    Item:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (name) => dispatch(addItem(name))
});

export default connect(undefined, mapDispatchToProps)(MainForm);