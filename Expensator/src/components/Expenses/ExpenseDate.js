export default function ExpenseDate(props) {
    const weekday = props.date.toLocaleString('en-US', { weekday: 'short' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <h2>{weekday} {day} {month} {year}</h2>
    );
}