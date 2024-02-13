import Sidebar from "../../components/sidebar/SidebarComp"
import Navbar from "../../components/navbar/NavbarComp"
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const[info,setInfo]=useState({});

  const handleChange=(e)=>{
    setInfo((prev)=>({...prev,[e.target.id]:e.target.value}))
  };
  //on send;upload img and take readable url, and send it along w inputs to mongodb 
  const handleClick = async (e) => {
      e.preventDefault();//no refreshing
      //upload image
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");//folder name
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/niyatisadh/image/upload",
          data
        );
        // console.log(uploadRes.data);
        const { url } = uploadRes.data; //destructure
        //newUser object
        const newUser = {
          ...info, //taking from info, updating; setinfo
          img: url,
        };
        //api request
        await axios.post("/auth/register", newUser);
      } catch (err) {
        console.log(err);
      }
  };

  console.log(info)

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="img"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div> 
              ))} */}
              {inputs && inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} 
                  id={input.id}/>
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;