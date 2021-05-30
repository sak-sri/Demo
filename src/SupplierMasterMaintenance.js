import classes from './SideNavigation.module.css'
const SupplierMasterMaintenace=(props)=>{
    return(
        <div className={classes.ContainerTab} onClick={()=>props.changeItem(3)}>   
            {props.content}
        </div>
    )
};
export default SupplierMasterMaintenace;