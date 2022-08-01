import withCounter from './HOC/withCounter'
 const HoverCounter = (props)=> {
    const {count,increment} = props;
    return (
        <div>
        <h1  onMouseOver={increment}>Hover {count} Times</h1>
        </div>
    )
}
export default withCounter(HoverCounter);
