import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getCode } from '../../features/dashboard/dashboardSlice'
import Card from "./Card"

function CardContainer() {
  const token = useSelector((state)=>state.auth.token);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCode(token));
  },[])
  return (
    <>
    <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
            <Card title="Code Cluster" code={`#include <iostream>\nusing namespace std;\nint main(){\n  cout<<hello world;\n} `} />
        </div>
    </div>
    </>
  )
}

export default CardContainer