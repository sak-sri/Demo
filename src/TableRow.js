import classes from './TableRow.module.css'
const TableRow=(props)=>{
   
    return(
        <div className={classes.row}>
            <div style={{width:'5%',backgroundColor:'gray'}}>{props.obj.key}</div>
            <div style={{borderLeft:'1px solid white',width:'25%',textAlign:'center',backgroundColor:'gray'}}>{props.obj.cat}</div>
            <div style={{textAlign:'center',borderLeft:'1px solid white',borderRight:'1px solid white',width:'25%',backgroundColor:'gray'}}></div>
            <div style={{textAlign:'center',borderRight:'1px solid white',width:'25%',backgroundColor:'gray'}}>{props.obj.desc}</div>
            <div style={{textAlign:'center',width:'20%',backgroundColor:'gray'}}>{props.obj.quant}</div>
        </div>
    )
};
export default TableRow;