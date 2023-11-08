import "bootstrap/dist/css/bootstrap.min.css";
import "./signuppage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";

import { FadeLoader } from "react-spinners"





export default function SignUpPage(props) {


  let [color, setColor] = useState("white")
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    position: "relative",

  }




  const dataInitial = {
    Name: "",
    Email: "",
    YoutubeLink: "",
  };
  const [nameerr, setNameerr] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [linkerr, setLinkerr] = useState(false);

  const navigate = useNavigate();
  const [stateforalert, setStateforalert] = useState(false);





  const [dataInput, setDataInput] = useState(dataInitial);
  const onInputChange = (e) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
    setNameerr(false);
    setLinkerr(false);
    setEmailerr(false)

  };







  const formSubmit = (e) => {




    e.preventDefault()


    if (dataInput.Name.length <= 0) {
      setNameerr(true)


    }

    if (dataInput.Email.length <= 0) {
      setEmailerr(true)

    }
    if (dataInput.YoutubeLink.length <= 0) {
      setLinkerr(true)
    }
  if (dataInput.Name && dataInput.Email && dataInput.YoutubeLink) {

    
    setStateforalert(true)


    axios.post("http://localhost:8000/signup",dataInput)
    .then((res)=>{

      setTimeout(() => {
    
        navigate("/SignUpDone");
      }, 3000);
      
      if (res.status===200) {


      
        
      }
    })




   }
  
  };





  return (
    <>
      <div className="container">
        <div className="custom-section mx-auto">
          <img src="/magpiie.png" className="img-set" height="30" />
          <h3 className="signup-description">
            Create your free Magpiie account
          </h3>

          <hr />

          <form className="signup-form signup-basic-form">
            <div className="custom-form-item">
              <label for="userName">Full Name</label>
              <input
                id="userName"
                type="text"
                placeholder="Enter Full Name"
                name="Name"
                value={dataInput.Name}
                onChange={onInputChange}
                required
              />
              {nameerr && <p style={{ fontSize: "10px", color: "red" ,marginLeft:"5px"}}>Name Required</p>}

            </div>

            <div className="custom-form-item">
              <label for="userEmail">Email</label>
              <input
                type="email"
                id="userEmail"
                placeholder="EMAIL"
                name="Email"
                value={dataInput.Email}
                onChange={onInputChange}
                required
              />
              {emailerr && <p style={{ fontSize: "10px", color: "red",marginLeft:"5px" }}>Email Required</p>}
            </div>
            <div className="custom-form-item">
              <label for="YoutubeLink">Youtube Link</label>
              <input
                id="YoutubeLink"
                placeholder="Youtube link"
                name="YoutubeLink"
                value={dataInput.YoutubeLink}
                onChange={onInputChange}
                required
              />
              {linkerr && <p style={{ fontSize: "10px", color: "red",marginLeft:"5px" }}>youtube link Required</p>}
            </div>
            <button className="btn-submit" onClick={formSubmit}>
              SignUp
            </button>
          </form>
        </div>
      </div>


      {

        stateforalert &&
        <div className="backgroundcolorofalert">


          <FadeLoader

            color={color}
            loading={true}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>

      }
    </>
  );
}
