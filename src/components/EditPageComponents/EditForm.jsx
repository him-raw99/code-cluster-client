import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFullCode } from "../../features/editCode/editCodeSlice";
import Loader from "../DashboardComponents/Loader"
function EditForm(props) {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const { isLoading , codeState } = useSelector((store) => store.editCode);
  useEffect(() => {
    dispatch(getFullCode({ token, id: props.id }));
  }, []);

  return( 
  <>
  {isLoading&&<Loader />}
  <h1>

  {codeState.title}
  </h1>
  <br/>
  <div className="newLine">
  {codeState.code}
  </div>
  </>
  );
}

export default EditForm;
