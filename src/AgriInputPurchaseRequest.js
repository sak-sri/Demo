import classes from './SideNavigation.module.css'
const AgriInputPurchaseRequest=(props)=>{
    return(
        <div className={classes.ContainerTab} onClick={()=>props.changeItem(0)}>
            {props.content}
        </div>
    )
};
export default AgriInputPurchaseRequest