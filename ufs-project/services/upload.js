import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3"

AWS.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region:process.env.AWS_REGION
})
const s3 = new AWS.S3()

export const upload = multer({
    storage: multerS3({
      s3,
      bucket: process.env.AWS_BUCKET,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl:"public-read",
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })