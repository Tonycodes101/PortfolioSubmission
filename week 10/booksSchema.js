let mongoose= require('mongoose')
const BookScheme= new mongoose.Schema({
 booktitle:{
 type:String,
 required:true
 },
 PubYear:Number,
 author:String,
 Topic:String,
 formate:String
 })

 module.exports= mongoose.model('bookmodel',BookScheme,'BookCollection2')
 let Books = require('./booksSchema')
 app.get('/allbooks',function(req,res){
    Books.find(function(err, allbook) {
    if (err) {
    console.log(err);
    } else {
    res.json(allbook);
    }
    });
    });

    app.get('/getbook/:id',function(req, res) {
        let id = req.params.id;
        Books.findById(id, function(err, book) {
        res.json(book);
        });
        });
        let newbook = new Books(req.body)

        app.post('/addbooks', function(req,res)
 {
 console.log("Ref",req.body)
 let newbook = new Books(req.body);
 console.log("newbook->",newbook)
 newbook.save()
 .then(todo => {
 res.status(200).json({'books': 'book added successfully'});
 })
 .catch(err => {
 res.status(400).send('adding new book failed');
 });
})

app.post('/updatebook/:id',function(req, res) {
    let id = req.params.id;
    let updatedbook = new Books(req.body);
    Books.findByIdAndUpdate(id,
    {
    booktitle:updatedbook.booktitle,
    PubYear:updatedbook.PubYear,
    author:updatedbook.author,
    Topic:updatedbook.Topic,
    formate:updatedbook.formate
    } ,
    function (err, docs) {
        if (err){
        console.log(err)
        }
        else{
         res.status(200).json({'books': 'book updated successfully'});
        }
         }
        
         )
        
        });
        app.post('/deleteBook/:id',function(req, res) {
            let id = req.params.id;
            console.log("deleting")
            Books.findByIdAndDelete(id,function (err, docs) {
            if (err){
            console.log(err)
            }
            else{
            res.status(200).send('Book Deleted');
            }
            }
            )
        });