import withCounter from './HOC/withCounter'
 const ClickCounter = (props)=> {
    const {count,increment} = props;
    return (
        <div>
        <button type='button' onClick={increment}>Clicked {count} Times</button>
        </div>
    )
}
export default withCounter(ClickCounter);
