import React, { Component } from 'react'
import {newData1}  from './mock'

export default class Table extends Component {
    constructor(props){
        super(props);
        this.state={
           data:newData1,
           name:' ',
           status:'',
           age:' ',
           salary:'',
           selected:null,
           editedstatus:'',
           editedname:' ',
           editedsalary:'',
           editedage:12
        }
    }
    render() {
     const onName=(e)=>{
     console.log(e.target.value)
     this.setState({name:e.target.value})
     }

     const onStatus=(e)=>{
       console.log(e.target.value)
       this.setState({status:e.target.value})
       
     }

     const onAge=(e)=>{
      console.log(e.target.value)
      this.setState({status:e.target.value})
      
    }
    const onSalary=(e)=>{
      console.log(e.target.value)
      this.setState({salary:e.target.value})
      
    }


     const adds=()=>{
     
      const data1={
       id:Date.now(),
       name:this.state.name,
       status:this.state.status,
       age:this.state.age,
       salary:this.state.salary
   }
      const newData=[...this.state.data,data1]
      this.setState({data:newData})
 
       }

      const onSearch=(e)=>{
      this.setState((state)=>{
          const newData=newData1.filter((v)=>v.name.includes(e.target.value));
          return {data:newData}
      })
      }
      
      const onDeleted=(id)=>{
        console.log(id)
        const newData=this.state.data.filter((v)=>v.id!==id)
        this.setState({data:newData})
      }
       //***************************************edited */
      const onEdited=(id,name,status,age,salary)=>{
      console.log(id)
      this.setState({selected:id, editedname:name, editedstatus:status,editedage:age,editedsalary:salary})

      }

      const onChangeName=(e)=>{
        this.setState({editedname:e.target.value})
      }
      const onChangeStatus=(e)=>{
        this.setState({editedstatus:e.target.value})
      }
      const onChangeAge=(e)=>{
        this.setState({editedage:e.target.value})
      }
     
      const onChangeSalary=(e)=>{
        this.setState({editedsalary:e.target.value})
      }

      const onSave=(id)=>{
         console.log(id)
         const newData=this.state.data.map((value)=>{
           return   value.id!==id ? value:{...value,name:this.state.editedname ,status:this.state.editedstatus,age:this.state.editedage,salary:this.state.salary}
         })
         this.setState({selected:null, data:newData})
      }
      //*******************************edited */
        return (
         <>
         
         <div  className='top'>
         
         <input  onChange={onName} placeholder='name'/>
         <input onChange={onStatus} placeholder='status'/>
        <input  type='number' onChange={onAge} placeholder='age'/>
        <input  type='number' onChange={onSalary} placeholder='salary'/>
        <input   onChange={onSearch} placeholder='search find.....'/>
            <button onClick={adds}   className='add'>add</button>

   </div>
         <div  className='container'>
   
   
               <table  border="1px" >
                      <thead>
                          <tr>
                             <th>ID</th>
                            <th>NAME</th>
                            <th>STATUS</th>
                            <th>AGE</th>
                            <th>SALARY</th>
                            <th>DELETED</th>
                            <th>EDITED</th>
                          </tr>
                      </thead>
                      <tbody>
                            {
                                this.state.data.map(({id,name,status,age,salary})=>{
                                    return(
                                        <tr  key={id}>
                                             <td>{id}</td>
                                             <td>{this.state.selected===id ?(<input  onChange={onChangeName} disabled={ this.state.selected!==id } value={this.state.editedname || name}/>):(<div>{name}</div>)}</td>
                                             <td>{this.state.selected===id?(<input   onChange={onChangeStatus}  disabled={this.state.selected!==id }  value={this.state.editedstatus || status}/>):(<div>{status}</div>)}</td>

                                             <td>{this.state.selected===id?(<input   onChange={onChangeAge}   disabled={this.state.selected!==id }  value={this.state.editedage || age}/>):(<div>{age}</div>)}</td>

                                             <td>{this.state.selected===id?(<input   onChange={onChangeSalary}   disabled={this.state.selected!==id }  value={this.state.editedsalary || salary}/>):(<div>{salary}</div>)}</td>
                                             <td onClick={()=>onDeleted(id)}><button>deleted</button></td>
                                             <td  onClick={()=>this.state.selected? onSave(id) :onEdited(id,name,status,age, salary)}><button>   { this.state.selected===id ? 'save' :'edited' }</button></td>
                                        </tr>
                                    )
                                })
                            }
                      </tbody>
               </table>
         </div>
         
         </>
        )
    }
}
