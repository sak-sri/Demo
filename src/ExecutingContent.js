import classes from './ExecutingContent.module.css'
const ExecutingContent=(props)=>{
    return(
        <div className={classes.Container}>
            <div className={classes.ContainerItems}>Undo Batch</div>
            <div style={{width:'20%'}} className={classes.ContainerItems}>Assign Suppliers</div>
            <div className={classes.ContainerItems}>Generate PO</div>
        </div>
    )
};
export default ExecutingContent;