const uploadSingleFile = async (fileObject) => {
  let filename = fileObject.name;
  filename = filename.split('.').join('-' + Date.now() + '.');
  let uploadPath = __dirname + '/../public/images/uploads/' + filename;

  try {
    await fileObject.mv(uploadPath);
    return {
      status: 'success',
      path: filename,
      errorCode: null,
    };
  } catch (error) {
    console.log('>>err: ', error);
    return {
      status: 'false',
      path: null,
      errorCode: JSON.stringify(error),
    };
  }
};

const uploadMultipleFiles = async (fileObjects) => {
  const uploadPromises = fileObjects.map(async (file) => {
    file.name = file.name.split('.').join('-' + Date.now() + '.');
    let uploadPath = __dirname + '/../public/images/uploads/' + file.name;

    try {
      await file.mv(uploadPath);
      return {
        status: 'success',
        path: file.name,
        errorCode: null,
      };
    } catch (error) {
      console.log('>>err: ', error);
      return {
        status: 'false',
        path: null,
        errorCode: JSON.stringify(error),
      };
    }
  });

  return Promise.all(uploadPromises);
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
