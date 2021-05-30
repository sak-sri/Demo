import AgriInputMasterMaintenance from './AgriInputMasterMaintenance'
import AgriPurchaseManagement from './AgriPurchaseManagement'
import AgriInputPurchaseRequest from './AgriInputPurchaseRequest'
import SupplierMasterMaintenance from './SupplierMasterMaintenance'
import TaxMasterMaintenance from './TaxMasterMaintenance'
import classes from './SideNavigation.module.css'
const SideNavigation=(props)=>{
    return(
        <div className={classes.Container}>
            <div className={classes.ContainerFirstChild}>
            <AgriPurchaseManagement content={"Agri-Purchase Management"} changeItem={props.changeItem}></AgriPurchaseManagement>
            <hr/>
            <AgriInputMasterMaintenance content={"Agri-Input Master Maintenance"} changeItem={props.changeItem}></AgriInputMasterMaintenance>
            <hr/>
            <SupplierMasterMaintenance content={"Supplier Master Maintenance"} changeItem={props.changeItem}></SupplierMasterMaintenance>
            <hr/>
            <AgriInputPurchaseRequest content={"Agri-Input Purchase Request"} changeItem={props.changeItem}></AgriInputPurchaseRequest>
            <hr/>
            </div>
            <div style={{height:'30vh',position:'absolute',bottom:'0px'}}>
            <hr></hr>
            <TaxMasterMaintenance content={"Tax Master Maintenance"} changeItem={props.changeItem}></TaxMasterMaintenance>
            <div style={{height:'20vh',backgroundColor:"#D3D3D3"}}></div>
            </div>
        </div>
    )
}
export default SideNavigation;