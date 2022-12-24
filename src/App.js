
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
    selectedFile: null,
    fileUploadedSuccessfully: false
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]});
  }
  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    //call api
  
    axios.post("https://61pks9svcj.execute-api.us-east-1.amazonaws.com/v1/upload", formData, {
      headers: {
        'Content-Type': 'image/jpeg'
      }
    }).then(() => {
      this.selectedFile({selectedFile: null});
      this.setState({fileUploadedSuccessfully: true});
    })
    .catch(error => console.log(error));
//    axios.post("https://66pyrc1adf.execute-api.us-east-1.amazonaws.com/prod/grkm-test-bucket/asd.jpeg")
    console.log(formData);

  }

  fileData = () => {
    if (this.state.selectedFile) {
      return(
      <div>
        <h2>File details</h2>
        <p>File Name: {this.state.selectedFile.name}</p>
        <p>File Type: {this.state.selectedFile.type}</p>
      </div>
      )
    }
    else if (this.state.fileUploadedSuccessfully) {
      return (
        <div>
          <br />
          <h4>Fike uploaded successfully</h4>
        </div>
      )
    }
    else {
      return(
        <div>
          <br />
          <h4>Choose a file</h4>
        </div>
      )
    }
  }


  render() {
    return(
      <div className="container">
        <h2>File upload system</h2>
        <h3>file upload serverless</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload</button>
        </div>
        {this.fileData()}
      </div>
    )
  }

}

export default App;
