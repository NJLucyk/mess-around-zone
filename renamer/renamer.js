var fs = require('fs');
var path = require('path');


var folder = "F:/Programs/VisualBoyAdvance/roms";

// Loop through all the files in the temp directory
fs.readdir( folder, function(err, files) {
  if(err) {
    console.error( "Could not list the directory.", err );
    return;
  } 

  files.forEach( function( file, index ) {
    var fromPath = path.join(folder, file);
    
    // console.log("file: " + file);
    // console.log("path: " + fromPath);
    var index = file.indexOf('-');
    var extIndex = file.lastIndexOf('.');
    // search for the - that separates number and real title. 
    // Regular expression would work better and stop this from only working first time it is run
    if (index > 0 && index < 10) {
      var number = file.substring(0, index-1);
      var title = file.substring(index, extIndex-1);
      var ext = file.substring(extIndex);
      var newFilename = title + ' - ' + number + ext;
      
      var toPath = path.join(folder, newFilename.trim());
      fs.rename(fromPath, toPath, function(error) {
        if( error ) {
          console.error("File moving error.", error);
        }
        else {
          console.log("Moved file '%s' to '%s'.", fromPath, toPath);
        }
      });
    } else {
      console.error("unable to move ")
    }
  });
});