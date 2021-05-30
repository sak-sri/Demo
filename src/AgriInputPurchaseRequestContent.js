import classes1 from './SideNavigation.module.css'
import classes2 from './AgriInputPurchaseRequestContent.module.css'
import classes3 from './ExecutingContent.module.css'
import ExecutingContent from './ExecutingContent.js'
import Executing from './Executing.js'
import Pending from './Pending.js'
import Completed from './Completed.js'
import Executed from './Executed.js'
import Table from './Table.js'
import { useState } from 'react';
const AgriInputPurchaseRequestContent=(props)=>{
    const [item,setItem]=useState([0,0,0,0]);
    const toggleVisibility=(id)=>{
        let Arr=[0,0,0,0];
        Arr[id]=1-item[id];
        setItem(Arr);
    }
    console.log(item)
    let element=null;
    if(item[0]===1){
        element=<div className={classes3.otherContainerItems} style={{position:'absolute',left:'52%'}}>Pending</div>
    }else if(item[1]===1){
        element=<ExecutingContent></ExecutingContent>
    }else if(item[2]===1){
        element= <div className={classes3.otherContainerItems} style={{position:'absolute',left:'78%'}} >Executed</div>;
    }
    else if(item[3]===1){
        element=<div className={classes3.otherContainerItems} style={{position:'absolute',left:'90%'}} >Completed</div>
    }
    return(
        <div style={{width:'90vw',position:'relative'}}>
            <div className={classes1.h1}>
                {props.name}
            </div>
            <div className={classes2.navbar}>
            <div className={classes2.navbarItemsWrapper}>
                <Pending toggleVisibility={toggleVisibility}></Pending>
                <Executing toggleVisibility={toggleVisibility}></Executing>
                <Executed toggleVisibility={toggleVisibility}></Executed>
                <Completed toggleVisibility={toggleVisibility}></Completed>
            </div>
            </div>
            {element}
        <Table></Table>
        </div>
    )
};
export default AgriInputPurchaseRequestContent;