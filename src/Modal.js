import classes from './Modal.module.css'
const Modal=(props)=>{
    return(
        <div className={classes.overlay} style={{display:props.disp}}>
        <div className={classes.modal}>
        <div className={classes.closebutton} onClick={()=>props.toggleModal()}>Close</div>
            <ul>Agri-Input Category: {props.cat}</ul>
            <ul>Product Description: {props.desc}</ul>
            <ul>Order Quantity: {props.quant}</ul>
            
        </div>
        
        </div>
    )
};
export default Modal;