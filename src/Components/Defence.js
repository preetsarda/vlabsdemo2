import React, { useState } from 'react';
import Timer from './timer';
function Defence() {
    const [trigger, setTrigger] = useState(false);
    const [Downloaded, setDownloaded] = useState(false);
    const [Uploaded, setUploaded] = useState(false);
    async function starts() {
        setTrigger(true);
        try {
            const Response = await fetch("http://65.1.91.14:8085/connect", {
                crossDomain: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            });
            if (Response.ok) {
                console.log("Fetch success");
            }
            else {
                console.log("Fetch Failed");
            }
            const dat = await Response.json();
            const newTab = window.open(dat.destination_link, '_blank');
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setTrigger(false);
        }
        // newTab.focus();
    }
    async function uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const Response = await fetch('http://65.1.91.14:8085/upload', {
                method: 'POST',
                body: formData,
            });

            if (Response.ok) {
                console.log('File uploaded successfully!');
                setUploaded(true)
            } else {
                console.log('Error uploading file');
            }
        } catch (error) {
            console.log('An error occurred:', error);
        }
    }
    const handleUploadClick = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (file) {
            // uploadFile(file);
            setTrigger(true);
        }
    }
    const handleDownloadClick = (event) => {
        setDownloaded(true);
    }
    return (
        <div className="container border rounded p-1 mt-2">
            <div className="row align-items-center">
                <h1 className="col display-6 p-2 ms-3 me-auto col-12 col-sm-auto ps-4">Defence</h1>
                <div className="col-12 col-md-3 d-flex justify-content-end">

                    <button className="btn btn-primary me-2 btn-sm" onClick={handleDownloadClick} type="button">
                        Download File
                    </button>
                    <input
                        type="file"
                        accept=".js,.java"
                        style={{ display: 'none' }}
                        id="file-upload-input"
                        onChange={handleUploadClick}
                        disabled={!Downloaded}
                    />
                    <label htmlFor="file-upload-input" disabled={!Downloaded} type="button" className="btn btn-primary me-2 btn-sm">
                        Upload File
                    </label>
                    <button className="btn btn-primary btn-sm" disabled={!Uploaded} onClick={starts} type="button">
                        Click Me
                    </button>

                </div>
                {trigger && <Timer />}
            </div>
        </div>
    );
}
export default Defence;