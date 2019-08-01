import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        };
    }

    componentWillMount() {
        if (this.props.itemEditing && this.props.itemEditing.id !== null) {
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status
            });
        }
        else {
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status
            });
        } else {
            this.onClear();
        }
    }


    onChange = (event) =>
    {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]:value
        });
    }

    onSave = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        // Cancel & Close Form
        this.onClear();
        this.onCloseForm();
    }

    onCloseForm = () =>
    {
        this.props.onCloseForm();
    }

    onClear = () => {
        this.setState({
            id: '',
            name: '',
            status: true
        });
    }


    render() {
        var { id } = this.state; 
        console.log(id);
        if (this.props.isDisplayForm === false) return null;
        return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {!id ? 'Add Task' : 'Update Task'}
                    <span 
                    className="fa fa-times-circle text-right"
                    onClick={this.onCloseForm}
                    ></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Name :</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                    </div>
                    <label>Status :</label>
                    <select 
                        className="form-control" 
                        required="required" 
                        name="status"
                        value={this.state.status}
                        onChange={this.onChange}
                        >
                        <option value={true}>Active</option>
                        <option value={false}>Hidden</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">
                            <span className="fa fa-plus mr-5"></span>
                             {!id ? 'Add' : 'Update'}
                        </button>
                        &nbsp;
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            onClick={this.onClear} >
                            <span className="fa fa-close mr-5"></span>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)