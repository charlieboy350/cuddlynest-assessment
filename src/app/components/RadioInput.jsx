import PropTypes from "prop-types";
import React from "react";

const RadioInput = (props) => {
    const [list,updateList] = React.useState([
        {
            id:0,
            name:'1X',
            value:1,
            selected:true
        },
        {
            id:1,
            name:'1.5X',
            value:1.5,
            selected:false
        },
        {
            id:2,
            name:'2X',
            value:2,
            selected:false
        }
    ])

    const selectLst = (id) => {
        const newList = list.map(lst=>{
            lst.selected = false
            if(lst.id === id){
                lst.selected = true
            }
            return lst;
        });

        updateList(newList); 

        props.speedControls(list.find(lst=>lst.id === id).value)
    }

    return (
      <div
        className="customRadio flex justify-center items-center"
      >
        {list.map(lst=>{
            return(
                <button key={lst.id} onClick={()=>selectLst(lst.id)} className={`${lst.selected ? 'bg-[#6c6c6c] text-white':'bg-white text-black'} h-[50px] w-[80px] text-center text-md border-[1px] border-[#000] mx-2 leading-[50px]`}>
                    {lst.name}
                </button>
            )
        })}
      </div>
    );
}

RadioInput.propTypes = {
  
};

export default RadioInput;
