import React, {JSX, useEffect, useState} from "react";
import NavigationBar from "../components/NavigationBar";

import progressOverviewResponse from '../data/progress-overview-response.json'
import ProgressOverviewCard from "../components/ProgressOverviewCard";
export default function App(): JSX.Element {

    return (
        <div className="flex flex-column container card-group p-5" style={{
            maxWidth: '2000px',
            boxSizing: "border-box",
        }}>
            <NavigationBar navbarButtonDisplay={[true, true, false]}></NavigationBar>
            <h1 className={"mt-4"}>Progress Overview</h1>
            <div className={"flex flex-row row justify-content-center"}>
                {progressOverviewResponse.map((task) => (
                    <ProgressOverviewCard id={task.id} username={task.username} percent={task.percent}></ProgressOverviewCard>
                ))}
            </div>
        </div>
    );
}