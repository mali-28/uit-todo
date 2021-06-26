import { useState } from "react";


const Context = () =>{
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [cond, setCond] = useState(true);
  const [index, setIndex] = useState(null);
  const inputChange = (e) =>{
    setInput(e.target.value);
  }
  
  const click = () =>{
    if(cond && input){
      setList([...list, input]);
      setInput('');

    }else if(!cond && input){
       list.map((val, indx)=>{
        if(indx ===  index){
         return list[indx] = input;
       
        }
      })
      setCond(true);
      setIndex(null);
      setInput('');
    }else{
      setCond(true);
    }
  }
  const delItem = (indx) =>{
    setList(list.filter((val,id)=>{
      return id !== indx;
    })
    )
    setIndex(null);
    setCond(true);
    setInput('');
  }

  const editItem = (indx) =>{
    setInput(list[indx]);
    setCond(false);
    setIndex(indx);
    
  }


  return (
    <>
    <div className='main'>
      <div className='box'>
        <div>
          <input onChange={inputChange} name='name' value={input} placeholder='✍️ Add items...'/>
          {cond ? <i className='fa fa-plus btn-add' onClick={()=>{click()}}></i> : <i onClick={()=>{click()}} className='fa fa-edit btn-add'></i>}
          {list.map((val, indx)=>{
            return<>
            <div className='div-list' key={indx}>
              <span>{indx+1} : {val}</span>
              <div className='list-btn'>
                  <i onClick={()=>{editItem(indx)}} className='fa fa-edit ' title='Edit Item'></i>

                  <i onClick={()=>{delItem(indx)}} className='fa fa-trash-alt ' title='Delete Item'></i>
            </div>
            </div>
            </>
          })}
        </div>
      </div>
    </div>
    </>
  );
}

export default Context;