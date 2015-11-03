require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cloudName: this.props.cloudName,
      uploadPreset: this.props.uploadPreset,
      isError: false,
      errorMessage: null,
      showPoweredBy: false,
      allowedFormats: null,
      uuid: this.uuid(),
      imageList: []
    };
  }
  uuid (){
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
       }
       return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
       }
       return guid();
  }
  getUploadOptions (){
    var options = {
      cloud_name: this.state.cloudName,
      upload_preset: this.state.uploadPreset
    };
    options.sources = this.props.sources;
    options.multiple = this.props.multiple;
    
    if(this.props.maxFiles){
      options.max_files = this.props.maxFiles
    }

    if(this.props.cropping && this.props.cropping === 'server'){
      options.cropping = this.props.cropping;
    }

    if(this.croppingAspectRatio){
      options.cropping_aspect_ratio = this.props.croppingAspectRatio;
    }

    if(this.props.publicId){
      options.public_id = this.props.public_id;
    }

    if(this.props.folder){
      options.folder = this.props.folder;
    }       
            
    if(this.props.tags && this.props.tags.length > 0){
      options.tags = this.props.tags;
    }

    if(this.props.resourceType){
      options.resource_type = this.props.resourceType;
    }

    if(this.props.allowedFormats){
      options.client_allowed_formats = this.props.allowedFormats;
    }

    var context = {};
    if(this.props.contextAlt){
      context.alt = this.props.contextAlt;
    }
        
    if(this.props.contextCaption){
      context.caption = this.props.contextCaption;
    }
    
    if(Object.keys(context).length > 0){
      options.context = context;
    }

    return options; 
  }
  setError (isError, errorMessage){
    self.setState({
      isError: true,
      errorMessage: 'No result returned from Cloudinary'
    });
  }
  handleClick (ev){
    self = this;
      try{
        var options = this.getUploadOptions();
        cloudinary.openUploadWidget(
          options,
          function(error, result) {
            if (error){
              self.setError(true, error)
                return false;
              }
            if (!result || result.length === 0) {
              self.setError(true, 'No result from Cloudinary');
              return false;
            }
            self.setState({
              imageList: self.state.imageList.concat(result)
            });

            return true;
          }
        );
      } catch(e) {
       self.setError(true, e);
         return false;
     }
        
    }
    render (){
      var uploader_id = "uploader_" + this.state.uuid;
      var images = this.state.imageList.map((data, i) => {
        return (
          <img
            key={i}
            alt={data.original_filename}
            src={data.url}
            height="100"
            width="100"
          />
        )
      });

      return (
        <section>
          <a ref='uploader' id={uploader_id} href="#"
            className={this.props.buttonClass}
            onClick={this.handleClick.bind(this)}>{this.props.buttonCaption}</a>
          <br/><br/>
          {images}
        </section>
      )
    }
}

App.propTypes = {
  cloudName: React.PropTypes.string.isRequired,
  uploadPreset: React.PropTypes.string.isRequired,
  showPoweredBy: React.PropTypes.bool,
  allowedFormats: React.PropTypes.array,
  maxFileSize: React.PropTypes.number,
  maxImageWidth: React.PropTypes.number,
  maxImageHeight: React.PropTypes.number,
  sources: React.PropTypes.arrayOf(React.PropTypes.string),
  defaultSource: React.PropTypes.string,
  multiple: React.PropTypes.bool,
  maxFiles: React.PropTypes.number,
  cropping: React.PropTypes.string,
  croppingAspectRatio: React.PropTypes.number,
  publicId: React.PropTypes.string,
  folder: React.PropTypes.string,
  tags: React.PropTypes.arrayOf(React.PropTypes.string),
  resourceType: React.PropTypes.string,
  contextAlt: React.PropTypes.string,
  contextCaption: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
  buttonCaption: React.PropTypes.string
};

App.defaultProps = {
  showPoweredBy: false,
  sources: ['local', 'url', 'camera'],
  defaultSource: 'local',
  multiple: true,
  maxFiles: null,
  cropping: null,
  croppingAspectRation: null,
  publicId: null,
  folder: null,
  tags: null,
  resourceType: 'auto',
  contextAlt: null,
  contextCaption: null,
  allowedFormats: ['png', 'gif', 'jpeg'],
  maxFileSize: null,
  maxImageWidth: null,
  maxImageHeight: null,
  buttonClass: 'cloudinary-button',
  buttonCaption: 'Upload images'
};

React.render(<App cloudName='reactrocks' uploadPreset='gnxkwfvx' />, document.querySelector("#app"));
