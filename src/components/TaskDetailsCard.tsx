import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css';
import {ResponsiveContainer} from "recharts";
import TaskDetailsRow from "./TaskDetailsRow";
import TaskDetailsItemList from "./TaskDetailsItemList";

interface TaskDetailsResponseObj {
    taskId: number;
    assignee: string;
    date: string;
    tasks: string;
    priority: string;
}

interface TaskDetailsResponse {
    taskDetailsResponse: TaskDetailsResponseObj
}

const handleArchiveItem = (taskId: number) => {
    console.log(`Archive task: ${taskId}`);
};

const handleDeleteItem = (taskId: number) => {
    console.log(`Delete task ${taskId}`);
};

const TaskDetailsCard: React.FC<TaskDetailsResponse> = ({
    taskDetailsResponse
}) => {
    return (
        <div className={"flex flex-column p-5 col m-3"} style={{
            backgroundColor: '#a2c8d5',
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <div className="p-6">
                <h1 className="mb-5">Task Details</h1>
                {/* Metrics List */}
                <TaskDetailsRow icon={"/icons/char-people.PNG"} title={"Assigned to"} status={taskDetailsResponse.assignee}/>
                <TaskDetailsRow icon={"/icons/char-time.PNG"} title={"Due date"} status={taskDetailsResponse.date}/>
                <TaskDetailsRow icon={"/icons/char-menu.PNG"} title={"Ongoing tasks"} status={taskDetailsResponse.tasks}/>
                <TaskDetailsRow icon={"/icons/char-alert.PNG"} title={"Task priority"} status={taskDetailsResponse.priority}/>

                <div className={"mt-5 mb-5"}></div>
                <TaskDetailsItemList taskId={taskDetailsResponse.taskId} itemType={"Attached files"} items={[]}/>
                <TaskDetailsItemList taskId={taskDetailsResponse.taskId} itemType={"Linked items"} items={[]}/>

                <div className={"flex flex-row row justify-content-end mt-5"}>
                    <button onClick={() => handleArchiveItem(taskDetailsResponse.taskId)} className="m-5 w-25 button-hover-help">
                        Archive Task
                    </button>
                    <button onClick={() => handleDeleteItem(taskDetailsResponse.taskId)} className="m-5 w-25 button-hover-danger">
                        Delete Task
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TaskDetailsCard;