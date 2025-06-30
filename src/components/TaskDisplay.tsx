import React from 'react';
import '../bootstrap/css/bootstrap.css'
import '../customCss/buttonUtilities.css'
import {useNavigate} from "react-router-dom";

interface TaskMetrics {
    id: number,
    name: string,
    imageUrl: string
}

interface TaskCardProps {
    tasksResponse: TaskMetrics[]
}

const TaskDisplayCard: React.FC<TaskCardProps> = ({
    tasksResponse
}) => {
    const navigate = useNavigate()

    const handleDetailsClick = (taskId: number) => {
        console.log(`Details for Task ${taskId}`);
        navigate('/details/'+taskId)
    };

    const handleUpdateClick = (taskId: number) => {
        console.log(`Update Task ${taskId}`);
    };

    const handleDeleteClick = (taskId: number) => {
        console.log(`Delete Task ${taskId}`);
    };

    return (
        <div className={"flex flex-column p-5 col-6 m-3"} style={{
            backgroundColor: '#a2c8d5',
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <div className="p-6">
                <h1 className="mb-5">Task Assignments</h1>

                {/* Task List */}
                <div className="space-y-4">
                    {tasksResponse.map((task) => (
                        <div
                            key={task.id}
                            className="flex flex-col p-4 rounded-lg shadow-sm"
                        >
                            {/* Task Info (Image + Name) */}
                            <div className={"row flex-row align-content-center"}>
                                <img width={64} height={64} className={"col-2"}
                                    src={task.imageUrl}
                                    alt={`icon`}
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                    onError={(e) => { // Fallback for broken image links
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/24x24/cccccc/000000?text=x';
                                    }}
                                />
                                <h2 className={"col-3"}>{task.name}</h2>
                                    <button
                                        onClick={() => handleDetailsClick(task.id)}
                                        className="m-1 col-2 button-hover-white"
                                    >
                                        Details
                                    </button>
                                    <button
                                        onClick={() => handleUpdateClick(task.id)}
                                        className="m-1 col-2 button-hover-white"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(task.id)}
                                        className="m-1 col-2 button-hover-white"
                                    >
                                        Delete
                                    </button>
                            </div>

                            {/* Action Buttons */}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default TaskDisplayCard;