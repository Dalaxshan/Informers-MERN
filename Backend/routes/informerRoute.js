const router = require('express').Router();
const informationModel = require('../model/information.modal');

//declare function
//error handling
function handleError(res, error) {
  res.status(400);
  res.send("something went wrong!!\n" + error);
}

//check emptylist
function isEmptyList(obj) {
  return !obj || obj.length == 0 || Object.keys(obj).length == 0;
}

//url:/information/   get:Read all
router.get("/information",(req, res) => {
  try {
    informationModel
      .find()
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(400);
          res.send("List is empty!!");
        }
        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    res.status(400);
    res.send(handleError(res, error));
  }
});

//url:/information/{:id}   get:Read one
router.get("/information/:id",(req, res) => {
  try {
    informationModel
      .findById(req.params.id)
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(400);
          res.send("List is empty!!");
        }
        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    res.status(400);
    res.send(handleError(res, error));
  }
});

//url:/information/add   post:Create
router.post("/information",(req, res) => {
  const first_Name = req.body.first_Name;
  const last_Name = req.body.last_Name;
  const address = req.body.address;
  const contact_no = req.body.contact_no;
  const informer_Name = req.body.informer_Name;
  const description = req.body.description;

  const newInformation = new informationModel({
    first_Name,
    last_Name,
    address,
    contact_no,
    informer_Name,
    description,
  });

  newInformation
    .save()
    .then(() => res.json("information successfully added!!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

//url:/information/update/{:id} put:update
router.put("/information/:id", (req, res) => {
    try {
      const id = req.params.id;
      const updateDls = req.body;
      informationModel.findByIdAndUpdate(id, updateDls, { new: true })
        .then(result => {
          if (!result) {
            res.status(404).send("List not found");
            return;
          }
          res.status(200).json("Update successfully!!");
        })
        .catch(error => handleError(res, error));
    } catch (error) {
      handleError(res, error);
    }
  });

//url:/information/delete/{:id} delete:delete
router.delete("/information/:id",(req,res)=>{
    try {
        let id = req.params.id;
        informationModel.findOneAndDelete({ "id": id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send("List is Empty!!");
                }
                res.status(200);
                res.send(id+" Successfully deleted!!!!\n");
            }).catch(error => handleError(res, error));
    } catch (error) {
        handleError(res, error);
    }
});

module.exports = router;
