import classes from '../css/TableRow.module.css'
import Modal from './Modal.js'
import { useState } from 'react';
import Logo from '../image.png'

const TableRow=(props)=>{
    const [vis,setVis]=useState('none')
    let visibility={
        textAlign:'center',
        width:'10%'
        ,borderBottom:'none',
        color:'black',
    }
   const toggleModal=()=>{
        if(vis==='none')
            setVis('block')
        else
            setVis('none')
   }
    return(
        <div className={classes.row}>
            <div style={{width:'5%',backgroundColor:'gray'}}>{props.obj.key}</div>
            <div style={{borderLeft:'1px solid white',width:'25%',textAlign:'center',backgroundColor:'gray'}}>{props.obj.cat}</div>
            <div style={{textAlign:'center',borderLeft:'1px solid white',borderRight:'1px solid white',width:'25%',backgroundColor:'gray'}}></div>
            <div style={{textAlign:'center',borderRight:'1px solid white',width:'25%',backgroundColor:'gray'}}>{props.obj.desc}</div>
            <div style={{textAlign:'center',borderRight:'1px solid white',width:'10%',backgroundColor:'gray'}}>{props.obj.quant}</div>
            <div className={classes.viewmodal} onClick={()=>{toggleModal()}} style={visibility}><img src={Logo} alt='click to view modal'></img></div>
            <Modal cat={props.obj.cat} desc={props.obj.desc} quant={props.obj.quant} disp={vis} toggleModal={toggleModal}/>
        </div>
    )
};

export default TableRow;