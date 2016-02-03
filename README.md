# React Cloudinary Uploader
React File Uploader for [Cloudinary](http://cloudinary.com/documentation/upload_widget) with or without Firebase integration.
This React component wraps the Cloudinary Widget and store the images (url) in firebase.
You can upload multiple images from the cloudinary widget, and you can use **reactcloudinary.jsx** file if you don't wish want to handle image storing without firebase.

# Using in project
==============
You need to add `<script src="//widget.cloudinary.com/global/all.js" type="text/javascript"></script>` before including react js.
And then just include [reactcloudinary.jsx](https://github.com/arpitHub/react-cloudinary/blob/master/reactcloudinary.jsx) in your project and change **cloudName** and **uploadPreset**.
You can use [index.jsx](https://github.com/arpitHub/react-cloudinary/blob/master/index.jsx) which has [Firebase](http://www.firebase.com) integration. For es6 support for firebase I have used [re-base](https://github.com/tylermcginnis/re-base) library.

# Local Installation (Standalone)
==============

* npm install
* node run server

For more info you can check out this repo : [React Webpack Babel Starter Kit](https://github.com/alicoding/react-webpack-babel)

# Configuration
===============
The component accepts few properties as input. cloudName and uploadPreset are required properties for this component.
* **cloudName**: the cloud name that you can find in your configuration in Cloudinary.
* **uploadPreset**: The upload_preset that you can find in your settins (Upload) in Cloudinary. 
* **showPoweredBy** [true | false]: It shows the poweredBy logo in the widget. 
* **allowedFormats**: An array of allowed format. (e.g. ['jpeg', 'png'])
* **maxFileSize**: If specified, perform client side validation that prevents uploading files bigger than the given bytes size (e.g. 130000)
* **maxImageWidth**: If specified, client-side scale-down resizing takes place before uploading if the width of the selected file is bigger than the specified value. (e.g. 2000)
* **maxImageHeight**: If specified, client-side scale-down resizing takes place before uploading if the height of the selected file is bigger than the specified value. (e.g. 2000)
* **sources** ["local", "web", "web"]: List of file sources
* **defaultSource**: The default selected source tab when the widget is opened.
* **multiple**: Whether selecting and uploading multiple images is allowed.
* **maxFiles**: The maximum number of files allowed in multiple upload mode.
* **cropping** ["server" | null]: Whether to enable interactive cropping of images before uploading.
* **croppingAspectRatio**: If specified, enforce the given aspect ratio on selected region when performing interactive cropping. (e.g. 0.5)
* **publicId**: Custom public ID to assign to a single uploaded image.
* **folder**: Folder name for all uploaded images. Acts as the prefix of assigned public IDs.
* **tags**: One or more tags to assign to the uploaded images.
* **resourceType** ["auto", "image", "raw"]: The resource type of the uploaded files.
* **contextAlt**: Additional context metadata to attach to the uploaded images.
* **contextCaption**: Additional context metadata to attach to the uploaded images.
* **buttonClass**: Allows overriding the default CSS class name of the upload button added to your site.
* **buttonCaption**: Allows overriding the default caption of the upload button added to your site.

# State
=======
The React component keeps track of the information returned from the upload.
* **imageList**: List of image uploaded to cloudinary
* **uuid**: Unique identifier for the widget

##Inspiration
===========
[React Cloudinary Uploader](https://github.com/domenicosolazzo/react-cloudinary-uploader)

## TODO
* Transformation
* Clean up
* Integrate Gallery Component (Carousel etc.)
