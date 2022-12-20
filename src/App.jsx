import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch()

  const todos = useSelector(state => state)

  const check = useSelector(state => state)

  const handlerDelete = (index) =>{
    dispatch({
      type: 'delete',
      payload: index
    })
  }

 
  

  return (
    <div className="container w 50">
      <ul className="list-group">
      {todos.map((item, index) => {
        
          return (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              
              
              <div>
                <input type='checkbox' checked={check} onClick="this.checked=!this.checked;" />
              </div>

              <div>
                {item.text}
              </div>
              
              <div>
                <button className="btn btn-outline-danger"
                onClick={() => handlerDelete(index)}
                >
                  X
                </button>  
              </div>

            </li>
          )
        })}
      </ul>
    </div>
    
  );
}

export default App;
