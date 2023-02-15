import React , {useEffect} from "react";
import { useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import EditForm from "../components/EditPageComponents/EditForm";
import Footer from "../components/HomePageComponents/Footer";
import Loader from "../components/DashboardComponents/Loader"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Redirecting from "../components/LoginPageComponents/Redirecting";
import DeleteModal from "../components/EditPageComponents/DeleteModal";

function EditPage() {
  const navigate = useNavigate();
  const { isLoading } = useSelector((store) => store.editCode);
  const {isLogin} = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);
  const { id } = useParams();
  return (
    <>
    {isLogin?<>
      <DeleteModal id={id} />
      {isLoading && <Loader/>}
      <DashboardNavbar />
      <EditForm id={id} />
      <Footer />
    </>:<Redirecting/>}
    </>
  );
}

export default EditPage;
