let router=require('express').Router()
let productcontrolers=require('../controllers/product.controller')
router.get('/products',productcontrolers.getfinalproducts)
router.post('/products',productcontrolers.storeallproducts)
router.delete('/products/:id',productcontrolers.deletepro)
router.put('/products/:id',productcontrolers.updatepro)
module.exports=router