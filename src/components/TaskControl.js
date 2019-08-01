import React, { Component } from "react";
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

class TaskControl extends Component {

    render() {
        return (
            <div className="row mt-15">
                {/* Search */}
                <TaskSearch/>
                {/* Sort */}
                <TaskSort/>
            </div>
        );
    }
}

export default TaskControl;
