const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send("Server Is Running");
})

module.exports  = router;