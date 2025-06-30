import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css';
import {ResponsiveContainer} from "recharts";

interface RecentUpdateObj {
    workspaceId: number,
    workspaceTitle: string,
    crossedOut: boolean,
    icon: string
}

const WorkspaceRow: React.FC<RecentUpdateObj> = ({
    workspaceId, workspaceTitle, crossedOut, icon
}) => {
    const finishMessage = crossedOut ? "Task marked as done." : "You have yet to finish this workspace."
    const checkmarkIcon = crossedOut ? "/icons/checkmark.PNG" : "/icons/unfinished.PNG"
    const honeClass = crossedOut ? "text-lg-start text-decoration-line-through" : "text-lg-start"

    return (
        <div className={"flex flex-row row m-1 justify-content-around"}>
            <div style={{
                display: 'flex',
            }}>
                <div className={"col-2"}>
                    <img
                        width={48}
                        height={48}
                        src={checkmarkIcon}
                        alt={`icon`}
                        onError={(e) => { // Fallback for broken image links
                            (e.target as HTMLImageElement).src = 'https://placehold.co/24x24/cccccc/000000?text=x';
                        }}
                    />
                </div>
                {/* Metric Label and Score */}
                <div className={"flex flex-column col-9 m-1"}>
                    <h3 className={honeClass}>{workspaceTitle}</h3>
                    <p className={"text-lg-start"}>{finishMessage}</p>
                </div>
                <div className={"col"}>
                    <img
                        width={64}
                        height={64}
                        src={icon}
                        alt={`icon`}
                        onError={(e) => { // Fallback for broken image links
                            (e.target as HTMLImageElement).src = 'https://placehold.co/24x24/cccccc/000000?text=x';
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default WorkspaceRow;