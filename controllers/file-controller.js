import File from "../models/file"

export const fileDownload = async (req, res,next) => {
    const file_id = req.query.id;

  if(file_id){
        return res.status(200).json({ message:  `Your file download succesfully and id is = ${file_id}` })
  }
  else{
    return res.status(500).json({ message: "id must be required !!!" })
}
};