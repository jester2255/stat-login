 const router = require("express").Router();
 const signIn = require("../../controllers/logInController");

 router.route("/")
   .get(user.findAll)
   .post(user.create);

 router
   .route("/:id")
   .get(user.findById)

 module.exports = router;