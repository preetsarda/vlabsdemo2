import React, { useState } from 'react';
import Timer from './timer';

const Defence = ({ disabled }) => {
  const [trigger, setTrigger] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const starts = async () => {
    setTrigger(true);

    try {
      const response = await fetch("http://13.126.239.109:8085/defence/connect", {
        crossDomain: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (response.ok) {
        console.log("Fetch success");
      } else {
        console.log("Fetch Failed");
      }

      const data = await response.json();
      console.log(data.destination_url);
      window.open(data.destination_url, '_blank');
      setSubmitted(true);
    } catch (error) {
      console.log(error);
      alert("Failed to start instance\nPlease refresh and try again")
      setSubmitted(false);

    } finally {
      setTrigger(false);
    }
    // newTab.focus();
  }

  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://13.126.239.109:8085/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      console.log('File uploaded successfully!');
      alert("File uploaded Successsfully!");
      setUploaded(true);
    } catch (error) {
      console.log('An error occurred:', error);
      alert("Error uploading please try again");
    }
  }
  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      uploadFile(file);
    }
  };

  const handleDownloadClick = (event) => {
    setDownloaded(true);
  };

  return (
    <div className="container border rounded p-4 mt-2">
      <h1 className="display-6 text-center">Defence</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <a href="http://13.126.239.109:8085/download" className={`btn btn-primary me-2 ${uploaded || disabled ? 'disabled' : ''}`} onClick={handleDownloadClick} aria-disabled={uploaded} download>
            Download File
          </a>
          <label htmlFor="file-upload-input" type="button" className={`btn btn-primary me-2 ${!downloaded || uploaded ? 'disabled' : ''}`} aria-disabled={!downloaded}>
            Upload File
            <input
              type="file"
              accept=".js,.java"
              style={{ display: 'none' }}
              id="file-upload-input"
              onChange={handleUploadClick}
              disabled={!downloaded || uploaded}
            />
          </label>
          <button className="btn btn-primary" disabled={!uploaded || submitted} onClick={starts} >
            Submit
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        {trigger && <Timer />}
      </div>
    </div>
  );
}

export default Defence;
