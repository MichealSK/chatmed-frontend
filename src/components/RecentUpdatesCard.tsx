import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css';
import WorkspaceRow from "./WorkspaceRow";

interface RecentUpdateObj {
    workspaceId: number,
    workspaceTitle: string,
    crossedOut: boolean,
    icon: string
}

interface RecentUpdatesResponse {
    recentUpdatesResponse: RecentUpdateObj[]
}

const RecentUpdatesCard: React.FC<RecentUpdatesResponse> = ({
    recentUpdatesResponse
}) => {
    return (
        <div className={"flex flex-column p-5 col-4 m-3"} style={{
            backgroundColor: '#a2c8d5',
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <div className="p-6">
                <h1 className="mb-5">Recent Updates</h1>
                {/* Metrics List */}
                {recentUpdatesResponse.map((workspace) => (
                    <WorkspaceRow workspaceId={workspace.workspaceId} workspaceTitle={workspace.workspaceTitle}
                                  crossedOut={workspace.crossedOut} icon={workspace.icon}/>
                ))}

            </div>
        </div>
    )
}
export default RecentUpdatesCard;