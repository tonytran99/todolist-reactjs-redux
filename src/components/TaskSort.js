import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskSort extends Component {
    onSort = (sortBy, sortValue) => {
        var sort = {
            by: sortBy,
            value: sortValue
        }
        this.props.onSort(sort);
    }

    render() {
        var { sort } = this.props;
        return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                >
                Sort <span className="fa fa-caret-square-o-down ml-5" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick={() => this.onSort('name',1)}>
                        <a 
                            href="#ni"
                            className={(sort.by==='name'&& sort.value === 1) ? "sort_selected" : ''}
                            >
                            <span className="fa fa-sort-alpha-asc pr-5">Name A-Z</span>
                        </a>
                    </li>
                    <li onClick={() => this.onSort('name',-1)}>
                        <a 
                            href="#nd"
                            className={(sort.by==='name'&& sort.value === -1) ? "sort_selected" : ''}
                            >
                            <span className="fa fa-sort-alpha-desc pr-5">Name Z-A</span>
                        </a>
                    </li>
                    <li role="separator" className="divider" />
                    <li onClick={() => this.onSort('status',1)}>
                        <a 
                            href="#sa"
                            className={(sort.by==='status'&& sort.value === 1) ? "sort_selected" : ''}
                            >Status Active</a>
                    </li>
                    <li onClick={() => this.onSort('status',-1)}>
                        <a
                            href="#sh"
                            className={(sort.by==='status'&& sort.value === -1) ? "sort_selected" : ''}
                            >Status Hidden</a>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sort: state.sort
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSort)
