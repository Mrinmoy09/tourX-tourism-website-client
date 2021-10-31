import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const {user} = useAuth();
    const[myBookings,setMyBookings] = useState([]);
    const [isDeleted , setIsDeleted] = useState(null);
    useEffect(()=>{
        fetch(`https://damp-hollows-28113.herokuapp.com/myBookings/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyBookings(data))
    },[isDeleted])

    const handleDelete = (id) => {
        fetch(`https://damp-hollows-28113.herokuapp.com/delete/${id}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }
            
        })
        .then(res=>res.json())
            .then(result=>{
                if(result.deletedCount){
                    setIsDeleted(true)
                }
                else{
                    setIsDeleted(false);
                }
            })
            alert('Do You want to procceed?')
    }

    return (
        <div>
            {myBookings.map(pd=>
 <div key={pd._id} className="conatiner">
                <ListGroup as="ol">
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{pd.name}</div>
      {pd.destination}
    </div>
    <Button onClick={()=>handleDelete(pd._id)} variant="primary">
    Delete
    </Button>
  </ListGroup.Item>
  
</ListGroup>
 </div>

)}
        </div>
    );
};

export default MyBookings;