import React, {JSX, useEffect, useState} from "react";
import WorkspaceOverviewCard from '../components/WorkspaceOverviewCard'
import TaskDisplayCard from '../components/TaskDisplay'
import ModelPerformanceColumnGraph from "../components/ModelPerformanceColumnGraph";
import ModelPerformanceTable from "../components/ModelPerformanceTable";
import TaskFeedbackCard from "../components/TaskFeedback";
import HelpCard from "../components/HelpCard";
import TaskInsightsCard from "../components/TaskInsightsCard";
import NavigationBar from "../components/NavigationBar";

import llmResponse from "../data/statistics-response.json";
import workspaceOverviewResponse from "../data/workspace-overview-response.json";
import tasksResponse from "../data/tasks-response.json";
import tasksFeedbackResponse from "../data/tasks-feedback-response.json";
import tasksInsightResponse from "../data/tasks-insights-response.json"

import '../bootstrap/css/bootstrap.css'
import '../customCss/buttonUtilities.css'

interface LLMStatisticResponse {
    models: string[];
    [benchmark: string]: string[] | number[];
}

interface BenchmarkData {
    benchmark: string;
    [model: string]: number | string;
}

const handleNavClick = () => {
    console.log(`Navbar click`);
};


export default function App(): JSX.Element {

    return (
        <div className="flex flex-column card-group container p-5" style={{
            maxWidth: '2000px',
            boxSizing: "border-box",
        }}>
            <NavigationBar navbarButtonDisplay={[false, false, false]}/>

            <div className={"flex flex-row row justify-content-between"}>
                <WorkspaceOverviewCard workspaceOverviewResponse={workspaceOverviewResponse}/>
                <ModelPerformanceTable llmResponse={llmResponse}/>
            </div>
            <div className={"flex flex-row row justify-content-between mt-3"}>
                <ModelPerformanceColumnGraph llmResponse={llmResponse}/>
                <TaskDisplayCard tasksResponse={tasksResponse}/>
            </div>
            <div className={"flex flex-row row justify-content-between mt-3"}>
                <TaskFeedbackCard taskFeedbackResponse={tasksFeedbackResponse}/>
                <TaskInsightsCard taskFeedbackResponse={tasksInsightResponse}/>
                <HelpCard/>
            </div>

        </div>
    );
}