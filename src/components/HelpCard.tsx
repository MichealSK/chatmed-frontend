import React from "react";
import TaskFeedbackCard from "./TaskFeedback";
import '../customCss/buttonUtilities.css'
import {useNavigate} from "react-router-dom";

const HelpCard: React.FC = () => {
    const navigate = useNavigate()

    const handleHelpClick = () => {
        console.log(`Help Page`);
    };

    const handleTeamManagementClick = () => {
        console.log(`Team Management Page`);
    };

    const handleSubscriptionClick = () => {
        console.log(`Subscription Page`);
    };

    const handleLearningResourcesClick = () => {
        console.log(`Learning Resources Page`);
    };

    return (
        <div className={"flex flex-column p-5 col-3 m-3"} style={{
            backgroundColor: '#a2c8d5',
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <h1 className="mb-5">Help & Support</h1>
            <button onClick={() => handleHelpClick()} className="p-3 m-1 col-12 text-start button-hover-help">
                Help
            </button>
            <button onClick={() => handleTeamManagementClick()} className="p-3 m-1 col-12 text-start button-hover-help">
                Team Management
            </button>
            <button onClick={() => handleSubscriptionClick()} className="p-3 m-1 col-12 text-start button-hover-help">
                Subscription
            </button>
            <button onClick={() => handleLearningResourcesClick()} className="p-3 m-1 col-12 text-start button-hover-help">
                Learning Resources
            </button>
        </div>
    )
}
export default HelpCard;