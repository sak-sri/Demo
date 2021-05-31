import classes2 from '../css/AgriInputPurchaseRequestContent.module.css'

const Executed=(props)=>{
    return(
        <div className={classes2.navbarItems} onClick={()=>props.toggleVisibility(2)}><span className={classes2.text}>Executed</span></div>
    )
};

export default Executed;
