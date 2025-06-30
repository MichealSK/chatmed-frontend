import React, { useState, useEffect } from 'react';
import '../bootstrap/css/bootstrap.css'
import {ResponsiveContainer} from "recharts";
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
    // const workOverviewResponse = workspaceOverviewResponse as WorkflowOverviewResponse

    useEffect(() => {
        // In a real scenario you would fetch via API
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

    const modelNames = llmResponse?.models
    const transposedRows = modelNames.map(modelName => {
        const rowData: (string | number)[] = [modelName];

        graphData.forEach(item => {
            const value = item[modelName];
            rowData.push(typeof value === 'number' ? value.toFixed(2) : value);
        });
        return rowData;
    });

    return (
        <div className={"flex flex-column p-5 col-6 m-3"} style={{
            borderRadius: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: "auto",
        }}>
            <ResponsiveContainer height={300}>
            <table>
                <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                    {/* First header cell for the 'Model' names (which are now row headers) */}
                    <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Model</th>
                    {/* Subsequent header cells for the 'Benchmark' names */}
                    {Object.keys(llmResponse).filter((key) => key !== "models").map((benchmark) => (
                        <th key={benchmark} style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>{benchmark}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {/* Iterate over the prepared transposedRows */}
                {transposedRows.map((row, rowIndex) => (
                    <tr key={`transposed-row-${rowIndex}`}> {/* Unique key for each row */}
                        {/* Iterate over the cells in the current transposed row */}
                        {row.map((cellValue, cellIndex) => (
                            <td
                                key={`transposed-cell-${rowIndex}-${cellIndex}`}
                                style={{
                                    padding: '8px',
                                    border: '1px solid #ddd',
                                    fontWeight: cellIndex === 0 ? 'bold' : 'normal', // Make the first column (model name) bold
                                }}
                            >
                                {cellValue}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            </ResponsiveContainer>
        </div>
    )
}

export default WorkspaceOverviewCard;