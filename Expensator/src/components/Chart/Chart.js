import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // Math.max needs a list of values, not an array
    // we use spread operator to pull out all array elements to add them as standalone arguments
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum} 
                label={dataPoint.label} />)
            )}
        </div>
    )
    
}

export default Chart;