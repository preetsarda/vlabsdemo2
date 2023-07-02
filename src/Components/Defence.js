import React, { useState } from 'react';
import Timer from './timer';

function Defence() {
  const [trigger, setTrigger] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  async function starts() {
    setTrigger(true);

    try {
      const response = await fetch("http://65.1.91.14:8085/connect", {
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
      const newTab = window.open(data.destination_url, '_blank');
    } catch (error) {
      console.log(error);
    } finally {
      setTrigger(false);
    }
    // newTab.focus();
  }

  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://13.232.174.98:8088/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log('File uploaded successfully!');
        setUploaded(true);
      } else {
        console.log('Error uploading file');
      }
    } catch (error) {
      console.log('An error occurred:', error);
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
          <a href="http://65.1.3.154:8089/download" className="btn btn-primary me-2" onClick={handleDownloadClick} disabled={!downloaded}>
            Download File
          </a>
                  <label htmlFor="file-upload-input" type="button" className="btn btn-primary me-2" disabled={!downloaded}>
            Upload File
            <input
              type="file"
              accept=".js,.java"
              style={{ display: 'none' }}
              id="file-upload-input"
              onChange={handleUploadClick}
              disabled={!downloaded}
            />
          </label>
          <button className="btn btn-primary" disabled={!uploaded} onClick={starts}>
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
