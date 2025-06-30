import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css'
import {ResponsiveContainer} from "recharts";

interface Metric {
    id: string;
    icon: string;
    label: string;
    score: number;
}

interface WorkspaceOverviewResponse {
    overallScore: number,
    metrics: Metric[]
}

interface WorkspaceOverviewCardProps {
    workspaceOverviewResponse: WorkspaceOverviewResponse;
}

const WorkspaceOverviewCard: React.FC<WorkspaceOverviewCardProps> = ({
    workspaceOverviewResponse
}) => {
    return (
        <div className={"flex flex-column col p-5 m-3"} style={{
            backgroundColor: '#a1c6d3',
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <h1 className="mb-5 bold">
            Workspace Overview
            </h1>
            <ResponsiveContainer height={300}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
            }}>

                <div className={"flex flex-column col-5"}>
                    <div
                         style={{ flexShrink: 0, width: '18rem', height: '18rem', borderRadius: '50%',
                             backgroundColor: '#a2c8d5',
                             display: 'flex', alignItems: 'center', justifyContent: 'center',
                             border: '16px solid #08272d',
                             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                         }}>
                        <div>
                            <span style={{fontSize: '7rem', fontWeight: 'bolder', color: '#fdfdfd', textAlign: 'center',}}>
                            {/* Ensure overallScore is a number before calling toFixed */}
                                {workspaceOverviewResponse.overallScore.toFixed(1)}
                            </span>
                        </div>
                    </div>
                </div>


                {/* Metrics List */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%',
                }}>
                    {workspaceOverviewResponse.metrics.map((metric) => (
                        // Individual Metric Item
                        <div key={metric.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            {/* Metric Icon - now an <img> tag */}
                            <div>
                                <img
                                    width={"50%"}
                                    height={"50%"}
                                    src={metric.icon}
                                    alt={`${metric.label} icon`}
                                    onError={(e) => { // Fallback for broken image links
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/24x24/cccccc/000000?text=x';
                                    }}
                                />
                            </div>
                            {/* Metric Label and Score */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                                <h3>{metric.label}</h3>
                                <h3 className={""}>
                                    {typeof metric.score === 'number' ? metric.score.toFixed(1) : 'N/A'}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </ResponsiveContainer>
        </div>
    )
}

export default WorkspaceOverviewCard;