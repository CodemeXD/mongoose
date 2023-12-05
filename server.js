const express = require('express')
const mongoose = require('mongoose')
const product = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes


app.post('/product', async(req, res) => {
  try {
        console.log(req.body) 
        
          //res.status(200).json(req.body)
        

      const productmodel = await product.create(req.body)    
      res.status(201).json(productmodel);
      
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})


app.get('/product', async(req, res) => {
  try {
        console.log(req.body) 
        
          //res.status(200).json(req.body)
        

      const productmodel = await product.find({})    
      res.status(200).json(productmodel);
      
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})




app.get('/product/:id', async(req, res) => {
  try {
    const {id} = req.params
        //console.log(req.body) 
        const productmodel = await product.findById(id)    
      res.status(201).json(productmodel);
      
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})



app.put('/product/:id', async(req, res) => {
  try {
    const {id} = req.params
        //console.log(req.body) 
        const productmodel = await product.findByIdAndUpdate(id, req.body)   
        if(!product){
          return res.status(404).json({message: `Cannot find any product with ID ${id}`})
        }

          // const updatedProduct = await product.findById(id)

          // res.status(201).json(updatedProduct);

      res.status(201).json(productmodel);
      
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})



app.get('/', (req, res) => {
  res.send('Hello NODE API')
})

//blog route
app.get('/blog', (req, res) => {
  res.send('Hello blog, my name is Eddie Mono')
})



// app.post('/product', async(req, res) => {
//   try {
//       const product = await product.create(req.body)    
//       res.status(201).json(product);
      
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({message: error.message})
//   }
// })

// mongodb://localhost:27017/crude

mongoose.connect('mongodb+srv://eddymono148:F9dQAL8BVz1d19sK@cluster0.auedwxv.mongodb.net/Users?retryWrites=true&w=majority')
.then(() => {
  console.log('connected to mongodb')
  app.listen(3000, () => {
    console.log('Node API App is running on port 3000');
  })
  
}).catch((error) => {
  console.log(error);
})

