import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const YEARS = ["2019", "2020", "2021", "2022"];
    
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {
                        YEARS.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;