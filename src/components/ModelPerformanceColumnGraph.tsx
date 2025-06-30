import React, { useState, useEffect } from 'react';
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import '../bootstrap/css/bootstrap.css'
//import workspaceOverviewResponse from "../data/workspace-overview-response.json";

interface LLMStatisticResponse {
    models: string[];
    [benchmark: string]: string[] | number[];
}

interface BenchmarkData {
    benchmark: string;
    [model: string]: number | string;
}

interface LLMStatisticGraphProps {
    llmResponse: LLMStatisticResponse;
}


const modelColors: Record<string, string> = {
    "gemma-3-4b-pt": "#4b71af",
    "VezilikaLLM": "#db8351",
    "domestic-yak-8B": "#54a767",
    "MKLLM-7B": "#c24d51",
};

const WorkspaceOverviewCard: React.FC<LLMStatisticGraphProps> = ({
    llmResponse
}) => {
    const [response, setResponse] = useState<LLMStatisticResponse | null>(null);
    const [graphData, setGraphData] = useState<BenchmarkData[]>([]);

    useEffect(() => {
        setResponse(llmResponse as LLMStatisticResponse);

    }, []);

    useEffect(() => {
        if (!response) return;

        const datasets: BenchmarkData[] = Object.entries(response)
            .filter(([key]) => key !== "models")
            .map(([benchmark, values]) => {
                const entry: BenchmarkData = { benchmark };
                response.models.forEach((model, idx) => {
                    entry[model] = (values as number[])[idx];
                });
                return entry;
            });

        setGraphData(datasets);
    }, [response]);

    return (
        <div className={"flex flex-column col p-5 m-3"} style={{
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <h1 className="text-2xl font-bold text-center mb-2">
                Model Performance Comparison Across Evaluation Benchmarks
            </h1>
            {graphData.length > 0 && (
                <ResponsiveContainer height={300}>
                    <BarChart data={graphData} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
                        <XAxis dataKey="benchmark" />
                        <YAxis domain={[0, 1]} />
                        <Tooltip />
                        <Legend verticalAlign="top" align="right" />
                        {response?.models.map((model) => (
                            <Bar key={model} dataKey={model} fill={modelColors[model] || "#ccc"} />
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    )
}

export default WorkspaceOverviewCard;