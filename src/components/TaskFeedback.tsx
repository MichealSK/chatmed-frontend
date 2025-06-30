import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css';
import {ResponsiveContainer} from "recharts";

interface FeedbackResponse {
    icon: string;
    title: string;
    text: string;
}

interface TaskFeedbackResponse {
    taskFeedbackResponse: FeedbackResponse[]
}

const TaskFeedbackCard: React.FC<TaskFeedbackResponse> = ({
    taskFeedbackResponse
}) => {
    return (
        <div className={"flex flex-column p-5 col-3 m-3"} style={{
            backgroundColor: '#a2c8d5',
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <div className="p-6">
                <h1 className="mb-5">Task Feedback</h1>
                    {/* Metrics List */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        width: '100%',
                    }}>
                    <div className="space-y-4">
                        {taskFeedbackResponse.map((task) => (
                            <div>
                                {/* Task Info (Image + Name) */}
                                <div className={"row flex-row align-content-center"}>
                                    <img width={64} height={64} className={"col-2"}
                                         src={task.icon}
                                         alt={`icon`}
                                         style={{
                                             objectFit: 'contain',
                                         }}
                                         onError={(e) => { // Fallback for broken image links
                                             (e.target as HTMLImageElement).src = 'https://placehold.co/24x24/cccccc/000000?text=x';
                                         }}
                                    />
                                    <div className={"flex flex-col col col-10"}>
                                        <h4>{task.title}</h4>
                                        <p>{task.text}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    </div>
                </div>
        </div>
    )
}
export default TaskFeedbackCard;