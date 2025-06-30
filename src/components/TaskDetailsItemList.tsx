import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css';

interface AttachedItem {

}

interface TaskDetailItemsResponse {
    taskId: number,
    itemType: string,
    items: AttachedItem[]
}

const handleUploadItem = (taskId: number, attachFile: boolean) => {
    if (attachFile) {
        console.log(`Attach file for task: ${taskId}`);
    } else {
        console.log(`Link item for task: ${taskId}`);
    }

};

const TaskDetailsItemList: React.FC<TaskDetailItemsResponse> = ({
    taskId, itemType, items
}) => {
    const icon = itemType === "Attached files" ? "/icons/attachment.PNG" : "/icons/link.PNG";
    const noItemsMessage = itemType === "Attached files" ? "No attachments available" : "No linked items"
    const buttonText = itemType === "Attached files" ? "Attach file" : "Add item"
    const attachType = itemType === "Attached files";

    return (
        <div className={"p-3 ps-5 mt-3"}>
            <div className={"flex flex-row row justify-content-center"}>
                <h2>{itemType}</h2>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: 'white',
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
                    <div className={"justify-content-around"} style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        {items.length === 0 && (
                            <h3 className={"col-7"}>{noItemsMessage}</h3>
                        )}
                        <button onClick={() => handleUploadItem(taskId, attachType)} className="m-1 col-4 button-hover-help">
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskDetailsItemList;