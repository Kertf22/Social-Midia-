import nc from "next-connect";
import { upload } from "../../services/upload";

const handler = nc()
  .use(upload.single('file'))
  .post((req, res) => {
    return res.json({ imgUrl:req.file.location });
  })

  export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };
export default handler;