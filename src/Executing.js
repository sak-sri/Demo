import classes2 from './AgriInputPurchaseRequestContent.module.css'
const Executing=(props)=>{
    return(           
         <div className={classes2.navbarItems} onClick={()=>props.toggleVisibility(1)}><span className={classes2.text}

         
         >Executing</span></div>)
};
export default Executing;