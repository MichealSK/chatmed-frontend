import React from 'react';
import '../customCss/progressBar.css'

const ProgressBar = ({ label, percentage }: { label: string; percentage: number; }) => {
    // Ensure percentage is within 0-100 bounds
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    const color = percentage < 33 ? "#780d0d" :
        percentage < 67 ? "#827e02" :
            "#08272d"

    return (
        <div className="progress-bar-container mb-3 mt-3">
            <h4 className="progress-bar-label">{label}</h4>
            <div className="progress-bar-track">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${clampedPercentage}%`, backgroundColor: `${color}` }}
                ></div>
            </div>
        </div>
    );
};
export default ProgressBar;