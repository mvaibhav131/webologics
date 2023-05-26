import Person from "../models/person"


export const personDetail = async (req, res,next) => {
    const { name,age,email } = req.body;
   
    const person_detail = new Person({
         name,
         age,
         email,
    });
    try {
        await person_detail.save();
    } catch (err) {
        console.log(err);
        if (err.code === 11000) {
             return res.status(500).json({ message: "Email must be unique" })
          } else {
             return res.status(500).json({ message: err })
          }
    }
    return res.status(201).json({ person_detail });
};