import multer from 'multer';
import { v4 as uuid4 } from 'uuid';


const storage = multer.diskStorage({
    destination(req, file, cb){
    cb(null, './uploads');
    },
    filename(req, file, cb){
    const extension = file.originalname.split(".").pop()
    const filename = `${uuid4()}.${extension}`;
    console.log(filename)
    cb(null, filename);
    }
});

export const uploadFiles = multer({storage}).single("image")