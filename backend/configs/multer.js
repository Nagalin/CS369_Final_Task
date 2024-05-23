const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public')
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const originalFileName = path.parse(file.originalname).name;
      const newFileName = `${originalFileName}_${uniqueSuffix}${path.extname(file.originalname)}`;
      cb(null, newFileName);
    }
})
  
const upload = multer({ storage: storage })

module.exports = upload