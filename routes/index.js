const express = require("express");
const router = express.Router();
const Product = require("../model/product");


//GET home Route
router.get("/home", async (req, res) => {
  try {
    const allProducts = await Product.find();
    // await createdProduct.save()
    res.json({ success: true, payload: allProducts });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// GET Products Route
router.get("/products", async (req, res) => {
  res.send("This is the Products route...");
});

//POST route for create products
router.post("/products", async (req, res) => {
  console.log(req.body);
  const { name, price, quantity, available } = req.body;
  try {
    const createdProduct = await Product.create({
      name,
      price,
      quantity,
      available,
    });
    // await createdProduct.save()
    res.json({ success: true, payload: createdProduct });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

//GET product by ID
router.post("/product/:id", async (req, res) => {
  try {
    const pro = await Product.findById(req.params.id);
    res.json({ success: true, payload: pro });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

//PUT product by ID
router.put('product/:id',async(req,res)=>{
  const id=req.params.id;
  try{
    // const updatedProduct=await Product.updateOne(req.body,id );
    // res.json({ success: true, payload: "Product Updated" });
    res.send("success")

  }catch(err){
    res.json({ success: false, message: err.message });
  }

})

//testing

router.put('/testing/:id',(req,res)=>{
  
    const id=req.params.id;
    const {name,price,quantity,available}=req.body
   Product.findByIdAndUpdate(id,{name,price,quantity,available}).then((response)=>{
    res.send("done")
   }).catch(err=>{
    
      res.status(500).send("DB error 500");
  
     
   })
    
  
  
   
  
})


//GET home Route
router.get("/about", (req, res) => {
  res.send("This is the about route...");
});

module.exports = router;
