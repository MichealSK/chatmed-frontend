import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css';
import {ResponsiveContainer} from "recharts";

interface TaskDetailRowResponse {
    icon: string;
    title: string;
    status: string;
}

const TaskDetailsCard: React.FC<TaskDetailRowResponse> = ({
    icon, title, status
}) => {
    return (
        <div className={"flex flex-row row justify-content-center m-1"}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <div className={"col col-1"}>
                    <img
                        width={"75%"}
                        height={"75%"}
                        src={icon}
                        alt={`icon`}
                        onError={(e) => { // Fallback for broken image links
                            (e.target as HTMLImageElement).src = 'https://placehold.co/24x24/cccccc/000000?text=x';
                        }}
                    />
                </div>
                {/* Metric Label and Score */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <h3 className={"col-5"}>{title}</h3>
                    <h3 className={"col-4"}>{status}</h3>
                </div>
            </div>
        </div>
    )
}
export default TaskDetailsCard;