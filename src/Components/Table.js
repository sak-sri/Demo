import { useState } from 'react';
import classes from '../css/Table.module.css'
import TableRow from './TableRow.js'
import {CSVLink} from 'react-csv'

let Arr=[{key:1,cat:'Seeds/Seedlings',desc:'chilli sakata 651(1500 seeds)',quant:26},
{key:2,cat:'Nutrients/Fertilizer',desc:'Acme Brand Fert A/B Set-50Kg',quant:114},
{key:3,cat:'Pesticide/Fungicide',desc:'Valiants ME(Methyk Eugnol) 30ml',quant:40},
{key:4,cat:'Growing Medium',desc:'Acme Brand Cocopeat-30kg',quant:20},
{key:5,cat:'Growing Medium',desc:'Acme Brand Cocobusk-50kg',quant:50},
{key:6,cat:'Pesticide/Fungicide',desc:'Decis(Delthametria) 1L',quant:4}]
const data=[
    ['Agri-Input Category','Product Image','Product Description','Order Quantity'],
    ['Seeds/Seedlings','','chilli sakata 651(1500 seeds)',26],
    ['Nutrients/Fertilizer','','Acme Brand Fert A/B Set-50Kg',114],
    ['Pesticide/Fungicide','','Valiants ME(Methyk Eugnol) 30ml',40],
    ['Growing Medium','','Acme Brand Cocopeat-30kg',20],
    ['Growing Medium','','Acme Brand Cocobusk-50kg',50],
    ['Pesticide/Fungicide','','Decis(Delthametria) 1L',4]
]

const Table=(props)=>{
    const [visible,setVisible]=useState([0,0]);

    let tableHeader1=null;
    let rows1=null;
    let tableHeader2=null;
    let rows2=null;

    const toggleVisibility=(id)=>{
        let temp=[...visible];
        temp[id]=1-temp[id];
        setVisible(temp);
    }
    if(visible[0]){
    tableHeader1=<div className={classes.rowheader}>
    <div style={{width:'5%',backgroundColor:'black'}}></div>
    <div style={{borderLeft:'1px solid white',backgroundColor:'black',width:'25%',textAlign:'center'}}>Agri-Input Category</div>
    <div style={{textAlign:'center',backgroundColor:'black',borderLeft:'1px solid white',borderRight:'1px solid white',width:'25%'}}>Product Image</div>
    <div style={{textAlign:'center',backgroundColor:'black',borderRight:'1px solid white',width:'25%'}}>Product Description</div>
    <div style={{textAlign:'center',backgroundColor:'black',width:'10%'}}>Order Quantity</div>
     </div>
    rows1=Arr.map(obj=><TableRow obj={obj}></TableRow>);
    }
    if(visible[1]){
        tableHeader2=<div className={classes.rowheader}>
        <div style={{width:'5%',backgroundColor:'black'}}></div>
        <div style={{borderLeft:'1px solid white',backgroundColor:'black',width:'25%',textAlign:'center'}}>Agri-Input Category</div>
        <div style={{textAlign:'center',backgroundColor:'black',borderLeft:'1px solid white',borderRight:'1px solid white',width:'25%'}}>Product Image</div>
        <div style={{textAlign:'center',backgroundColor:'black',borderRight:'1px solid white',width:'25%'}}>Product Description</div>
        <div style={{textAlign:'center',backgroundColor:'black',width:'10%'}}>Order Quantity</div>
         </div>
    rows2=Arr.map(obj=><TableRow obj={obj}></TableRow>);
    }
    return(
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.headerItem1}>Executing Agri-Input Orders</div>
                <div className={classes.headerItem2}>Batched By</div>
            </div>
            <hr></hr>
            <div className={classes.orders}>
                <div className={classes.h1}  onClick={()=>{toggleVisibility(0)}}>AGBUY13042020_1042</div>
                <div className={classes.h2}>Alex Lee</div>
                <div className={classes.h3}><CSVLink data={data}>RFQList_13042020_1042(click to download)</CSVLink></div>
            </div>
            {tableHeader1}
            {rows1}
            <div className={classes.orders}>
                <div className={classes.h1}  onClick={()=>{toggleVisibility(1)}}>AGBUY09042020_1112</div>
                <div className={classes.h2}>Alex Lee</div>
                <div className={classes.h3}><CSVLink data={data}>RFQList_09042020_1112(click to download)</CSVLink></div>
            </div>
            {tableHeader2}
            {rows2} 
        </div>
    )
};

export default Table;