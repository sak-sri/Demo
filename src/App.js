import classes from './App.module.css';
import SideNavigation from './Components/SideNavigation.js'
import AgriInputMasterMaintenanceContent from './Components/AgriInputMasterMaintenanceContent'
import AgriPurchaseManagementContent from './Components/AgriPurchaseManagementContent'
import SupplierMasterMaintenanceContent from './Components/SupplierMasterMaintenanceContent'
import TaxMasterMaintenanceContent from './Components/TaxMasterMaintenanceContent'
import AgriInputPurchaseRequestContent from './Components/AgriInputPurchaseRequestContent'
import { useState } from 'react';
const App=()=>{
  const [item,setItem]=useState(parseInt(0));
  const changeItem=(id)=>{
    setItem(parseInt(id));
  }
  let SideNavigationTab= <AgriInputPurchaseRequestContent name={"Agri-Input Purchase Request"}/>;
  if(item===parseInt(0)){
    SideNavigationTab=<AgriInputPurchaseRequestContent name={"Agri-Input Purchase Request"}/>
  }else if(item===parseInt(1)){
    SideNavigationTab= <AgriInputMasterMaintenanceContent name={"Agri-Input Master Maintenance"}/>
  }else if(item===parseInt(2)){
    SideNavigationTab= <AgriPurchaseManagementContent name={"Agri-Purchase Management"}/>
  }else if(item===parseInt(3)){
    SideNavigationTab=<SupplierMasterMaintenanceContent name={"Supplier Master Maintenance"}/>
  }else if(item===parseInt(4)){
    SideNavigationTab=<TaxMasterMaintenanceContent name={"Tax Master Maintenance"}/>
  }
  return (
    <div className={classes.Container}>
      <SideNavigation changeItem={changeItem}/>
      {SideNavigationTab}
    </div>
  );
}

export default App;
