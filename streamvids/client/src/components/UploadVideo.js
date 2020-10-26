import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './csell.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: light-green;
`;

const UploadVideo = (props) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onChangePhoto = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]))
    setImage(e.target.files[0])
  }

  const hideLoader = () => {
    setLoading(false);
  }

  const showLoader = () => {
    setLoading(true);
  }

   const onFormSubmit  = async(e)=>{
    e.preventDefault();
    showLoader();
    let customId = "custom-id-yes";
    if (image) {
    const formData = new FormData();
    formData.append('image',image);
    formData.set('title',title);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
        
    };
   await axios.post("http://localhost:3002/api/v1/video", formData, config)
        .then((res) => {
console.log(res)
console.log(res.data.status)
console.log(res.data.data.message)
console.log(res.data.data.status)
console.log(res.status)
          if(res.data.status === 'error') {
            toast.warn(res.data.message, {
              toastId: customId,
              position: toast.POSITION.TOP_RIGHT
            });
          setErrorMessage(res.data.message);
          hideLoader();
          } else if(res.data.status === 'error') {
            toast.warn(res.data.message, {
              toastId: customId,
              position: toast.POSITION.TOP_RIGHT
            });
          setErrorMessage(res.data.message);
          hideLoader();
          } else if(res.data.status === 'success') {
            setSuccessMessage(res.data.data.message);
          toast.success(res.data.data.message, {
            toastId: customId,
            position: toast.POSITION.TOP_CENTER
          });
          hideLoader();
          }
        })
        .catch((error) => {
          console.log(error)
          toast.warn('file not supported, upload mp4 or gif', {
            toastId: customId,
            position: toast.POSITION.TOP_RIGHT
          });
    });
  } else {
    setErrorMessage('You need to upload a video');
    toast.warn('You need to upload a video', {
      toastId: customId,
      position: toast.POSITION.TOP_CENTER
    });
    hideLoader();
    
}
}
  return (

<div class="container" style={{paddingBottom: '260px',
    paddingTop: '100px', margin:'auto'}}>
      {errorMessage ? <ToastContainer position= "top-right"
autoClose= '3000'
hideProgressBar= {false}
closeOnClick= {true}
pauseOnHover= {true}
draggable= {true}
progress= {undefined}/> : ''}
      {successMessage ? <ToastContainer position= "top-right"
hideProgressBar= {false}
closeOnClick= {true}
pauseOnHover= {true}
draggable= {true}
progress= {undefined}/> : ''}
      <div class="row" style={{display: 'flex !important',
   alignItems: 'center !important'}}>
          <form class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-3 col-md-3 col-sm-offset-4 col-lg-4 col-lg-offset-5">
            <h1>Upload A Video</h1>
            <p>
              <label class="sr-only" for="">Title</label>
              <input
                        class="form-control"
                        width="50%"
                        type="text"
                        name="title"
                        id="title2"
                        value={title ? title : ''}
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                        required
                      />
            </p>
            <p>
              <label class="sr-only" for="">Select A Video</label>
              <input id="upload" type="file" onChange={e => setImage(e.target.files[0])} />
            </p>
            <button onClick={onFormSubmit}
                className="btn btn-primary btn-block btn-sm">
                {loading ? <ClipLoader
 css={override} color={"white"} size={'25'}
        /> : `Upload`}</button>
          </form>
      </div>
    </div>
  );
};

export default UploadVideo;
