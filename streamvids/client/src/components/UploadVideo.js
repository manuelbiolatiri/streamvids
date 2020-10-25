import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './csell.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
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
          if(res.status === 400) {
            toast.warn(res.data.error, {
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
          } else if(res.data.status === 'success' || res.data.data.message === 'video successfully posted') {
            setSuccessMessage(res.data.message);
          toast.success(res.data.message, {
            toastId: customId,
            position: toast.POSITION.TOP_CENTER
          });
          setTimeout(() => {
            hideLoader();
          }, 1900)
          }
        })
        .catch((error) => {
          console.log(error)
          toast.warn('Unable to send mail at this time, try again later', {
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
    //   <div className="container center" style={{marginBottom:'600px'}}>
    //     {errorMessage ? <ToastContainer position= "top-right"
    //     autoClose= '3000'
    //     hideProgressBar= {false}
    //     closeOnClick= {true}
    //     pauseOnHover= {true}
    //     draggable= {true}
    //     progress= {undefined}/> : ''}
    //         {successMessage ? <ToastContainer position= "top-right"
    //     hideProgressBar= {false}
    //     closeOnClick= {true}
    //     pauseOnHover= {true}
    //     draggable= {true}
    //     progress= {undefined}/> : ''}

<div class="container" style={{paddingBottom: '300px',
    paddingTop: '100px', margin:'auto'}}>
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
                {loading ? <FadeLoader
 css={override} color={"black"} size={2}
        /> : `Upload`}</button>
          </form>
      </div>
    </div>
  );
};

export default UploadVideo;

          {/* <div className="container">
            <article className="br3 ba b--black-10 mv4 w-100  bg-white shadow-5 center">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="confirmsale" className="ba b--transparent ph0 mh0">
                    {/* <h2 className="f1 fw6 ph0 mh0">Upload A Video</h2> */}
                    {/* <h2 className="">Upload A Video</h2>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="title">
                        Title
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white  w-100"
                        type="text"
                        name="title"
                        id="title2"
                        value={title ? title : ''}
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div className="button-wrap mt3">
  <label class ="new-button" for="upload"><span>
  <FontAwesomeIcon icon={faCloudUploadAlt} style={{color:'white',width:'1rem',height:'1rem'}}/>
  </span> Upload Video</label>
  <input id="upload" type="file" onChange={e => setImage(e.target.files[0])} />
</div>  */}
                    {/* <div className=" button-wrap mt3">
              
              <input type="file" name="image" ref={fileInput => this.fileInput = fileInput}
               style={{display:'none'}} onChange={onChangePhoto} />
              <button class ="new-button" style={{border:'none'}} onClick={()=> this.fileInput.click()}><span><FontAwesomeIcon icon={faCloudUploadAlt} style={{color:'white',width:'1rem',height:'1rem'}}/>
  </span> Upload Video</button>
            </div> */}
            {/* <div className="mt3">
            {photo ? <img src={photo} style={{width:'5rem', height:'5rem'}} alt="img"/> : ''}
            </div>
                  </fieldset>
                  <div className="">
                  <button onClick={onFormSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                {loading ? <FadeLoader
 css={override} color={"black"} size={6}
        /> : `Upload`}</button>
                  </div>
                </div>
              </main>
            </article>
          </div>
          </div> */}
