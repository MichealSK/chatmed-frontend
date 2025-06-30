import React, {JSX} from "react";
import NavigationBar from "../components/NavigationBar";
import TaskDetailsCard from "../components/TaskDetailsCard";

import taskDetailsResponse from "../data/tasks-details-response.json";
import workspaceUpdatesResponse from "../data/workspace-updates-response.json"
import RecentUpdatesCard from "../components/RecentUpdatesCard";

export default function App(): JSX.Element {

    return (
        <div className="flex flex-column container card-group p-5" style={{
            maxWidth: '2000px',
            boxSizing: "border-box",
        }}>
            <NavigationBar navbarButtonDisplay={[true, true, true]}/>

            <div className={"flex flex-row row justify-content-between mt-3"}>
                <RecentUpdatesCard recentUpdatesResponse={workspaceUpdatesResponse}/>
                <TaskDetailsCard taskDetailsResponse={taskDetailsResponse}/>
            </div>
        </div>
    );
}