import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../../features/editCode/editCodeSlice';
import { setId } from '../../features/editCode/editCodeSlice';
function EditForm(props) {
    const dispatch = useDispatch();
    const {token} = useSelector((store)=>store.auth);
    useEffect(()=>{
        dispatch(setToken(token));
        dispatch(setId(props.id));
      },[])
      return (
    <div>EditForm</div>
  )
}

export default EditForm;