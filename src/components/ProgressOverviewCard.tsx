import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css';
import {ResponsiveContainer} from "recharts";
import ProgressBar from "./ProgressBar";

interface ProgressOverviewResponse {
    id: number,
    username: string,
    percent: number
}

const handleViewDetailsClick = (taskId: number) => {
    console.log(`View Details for ${taskId}`);
};

const ProgressOverviewCard: React.FC<ProgressOverviewResponse> = ({
    id, username, percent
}) => {

    return (
        <div className={"flex flex-column col-5 p-5 m-3"} style={{
            backgroundColor: '#a2c8d5',
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <div className="p-6">
                <h1 className="mb-5">Member: {username}</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%',
                }}>
                    <div className="space-y-4">
                        <div>
                            <div className={"flex flex-col col col-10"}>
                                <ProgressBar label={"Progress:"} percentage={percent}></ProgressBar>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => handleViewDetailsClick(id)}
                    className="m-1 col-4 button-hover-white mt-3"
                >
                    View Details
                </button>
            </div>
        </div>
    )
}
export default ProgressOverviewCard;