import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css';
import {ResponsiveContainer} from "recharts";
import ProgressBar from "./ProgressBar";

interface FeedbackResponse {
    title: string;
    percentage: number;
}

interface TaskInsightsResponse {
    taskFeedbackResponse: FeedbackResponse[]
}

const TaskInsightsCard: React.FC<TaskInsightsResponse> = ({
    taskFeedbackResponse
}) => {

    return (
        <div className={"flex flex-column col p-5 m-3"} style={{
            backgroundColor: '#a2c8d5',
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <div className="p-6">
                <h1 className="mb-5">Task Insights</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%',
                }}>
                    <div className="space-y-4">
                        {taskFeedbackResponse.map((task) => (
                            <div>
                                <div className={"flex flex-col col col-10"}>
                                    <ProgressBar label={task.title} percentage={task.percentage} color={
                                        task.percentage < 33 ? "#780d0d" :
                                        task.percentage < 67 ? "#827e02" : "#08272d"}></ProgressBar>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskInsightsCard;