import classes from './SideNavigation.module.css'
const AgriInputMasterMaintenance=(props)=>{
    return(
        <div className={classes.ContainerTab} onClick={()=>props.changeItem(1)}>
            {props.content}
        </div>
    )
};
export default AgriInputMasterMaintenance;