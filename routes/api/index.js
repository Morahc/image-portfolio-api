const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Img = require("../../models/img");

router.get("/", async (req, res) => {
  try {
    const images = await Img.find();
    res.send(images);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/upload", (req, res) => {
  if(req.files == null){
    return res.status(400).send({ msg: 'No file uploaded'})
  }
  const file = req.files.file;

  file.mv(`./public/images/uploads/${file.name}`, err => {
    if(err) {
      console.error(err)
      return res.status(500).send(err)
    }
  })
  Img.create({imgSrc: file.name})
  res.send({msg: 'Image Uploaded'})

}); 

module.exports = router;