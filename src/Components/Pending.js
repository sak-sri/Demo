import classes2 from '../css/AgriInputPurchaseRequestContent.module.css'

const Pending=(props)=>{
    return(
        <div className={classes2.navbarItems}  onClick={()=>props.toggleVisibility(0)}><span className={classes2.text}
        >Pending</span></div>
    )
};

export default Pending;