import classes from './SideNavigation.module.css'
const AgriPurchaseManagement=(props)=>{
    return(
        <div className={classes.ContainerTab} onClick={()=>props.changeItem(2)}>
        {props.content}
        </div>
    )
};
export default AgriPurchaseManagement;