import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from "./../actions/index";

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteItem = () => {
        this.props.onDeleteItem(this.props.task.id);
        this.props.onCloseForm();
    }

    onEditItem = () => {
        this.props.onOpenForm();
        this.props.onEditItem(this.props.task);
    }

    render() {
        var { task } = this.props; //ES6
        var { index } = this.props;
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status === true ? "label label-danger" : "label label-success"}
                        onClick={this.onUpdateStatus}
                    >{task.status === true ? "Active" : "Hidden"}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"
                        onClick={this.onEditItem}
                    >
                        <span className="fa fa-pencil mr-5" /> Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteItem}>
                        <span className="fa fa-trash mr-5"/> Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDeleteItem: (id) => {
            dispatch(actions.deleteItem(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditItem: (task) => {
            dispatch(actions.editItem(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
