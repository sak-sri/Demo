import classes from '../css/SideNavigation.module.css'

const TaxMasterMaintenance=(props)=>{
    return (
        <div style={{height:'10vh'}} className={classes.ContainerTab} onClick={()=>{props.changeItem(4)}}>
            {props.content}
        </div>
    )
};

export default TaxMasterMaintenance;