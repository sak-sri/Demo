import classes2 from './AgriInputPurchaseRequestContent.module.css'
const Completed=(props)=>{
    return(
        <div className={classes2.navbarItems}  onClick={()=>props.toggleVisibility(3)}><span className={classes2.text}>Completed</span></div>
    )
};
export default Completed;