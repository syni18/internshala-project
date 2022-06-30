import React, {useState} from "react";
import { getDownloadURL, getStorage } from "firebase/storage";
import { ref, uploadBytes } from "firebase/storage";
import Avatar from "@mui/material/Avatar";
import Sidebar from "../dashboard/Sidebar";
import "./setting.css";

function Setting() {

  const storage = getStorage();
  const [pickfile, setPickfile] = useState(null);
  const [ url, setUrl] = useState(null);
  
  const myhandle = (e) => {
    if(e.target.files[0]){
      setPickfile(e.target.files[0])
    }
  }

  const AvatarSubmit = (e) => {
    e.preventDefault()
    const imageRef = ref(storage, "image")
    uploadBytes(imageRef, pickfile)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((err) => {
            console.log(err.message, "error getting the image Url");
          });
        setPickfile(null);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <Sidebar/>
        <div className="dashboard_body">
          <h1>Setting</h1>
          <Avatar sx={{ width: "19%", height: "31%" }} src={url} />
          <div className="avatar_change">
            <form onSubmit={AvatarSubmit}>
              <input id="filetype" type="file" name="mypng" onChange={myhandle} />
              <input type="submit" value="upload" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
