const router= require('express').Router();
const userModel = require('../model/user.modal');

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

//url:/user/   get:Read all
router.get("/user",(req, res) => {
  try {
    userModel
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

//url:/user/{:id}   get:Read one
router.get("/user/:id",(req, res) => {
  try {
    userModel
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

//url:/user/add   post:Create
router.post("/user",(req, res) => {
  const profile_name = req.body.profile_name;
  const email_id = req.body.email_id;
  const contact_no = req.body.contact_no;
  const position = req.body.position;
  const password = req.body.password;

  const newuser = new userModel({
    profile_name,
    email_id,
    contact_no,
    position,
    password
  });

  newuser
    .save()
    .then(() => res.json("user successfully added!!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

//url:/user/update/{:id} put:update
router.put("/user/:id", (req, res) => {
    try {
      const id = req.params.id;
      const updateDls = req.body;
      userModel.findByIdAndUpdate(id, updateDls, { new: true })
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

//url:/user/delete/{:id} delete:delete
router.delete("/user/:id",(req,res)=>{
    try {
        let id = req.params.id;
        userModel.findOneAndDelete({ "id": id })
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
