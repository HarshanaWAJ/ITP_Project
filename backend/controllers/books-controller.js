const { findById } = require("../models/book");
const book = require("../models/book");


const getAllbooks = async(req,res,next) => {
     
    let books;
    try{
        books = await book.find();
    }catch (err){
        console.log(err);
    } 

    if(!books){
         return res.status(404).json({messege:"Not available"});
    }
    return res.status(200).json({books});
};


const getById = async(req,res,next)=>{
    const id = req.params.id;
    let Book;
    try{
        Book =await book.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!Book){
        return res.status(404).json({messege:"No Book found"}); 
    }
    return res.status(200).json({Book});
};

const addBook = async(req,res,next) => {
    const{name,author,description,available,noofbooks,image} = req.body;
    let Book;
    try{
        Book = new book({
            name,
            author,
            description,
            noofbooks,
            available,
            image

        });
        await Book.save();

    }catch(err){
        console.log(err);
    }

    if(!Book){
        return res.status(500).json({messege:'Unable to add'});
    }
    return res.status(201).json({Book});

}; 

const updateBook = async(req,res,next) => {
    const id = req.params.id;
    const{name,author,description,available,noofbooks,image} = req.body;
    let Book;
    try{
        Book = await book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            noofbooks,
            available,
            image
        });
        Book = await Book.save()
    }catch(err){
        console.log(err);
    }
    if(!Book){
        return res.status(404).json({messege:'Unable to Update By this id'});
    }
    return res.status(200).json({Book});
       
};

const deleteBook = async(req,res,next) => {
    const id = req.params.id;
    let Book;
    try{
        Book = await book.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!Book) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
        return res.status(200).json({ message: "Product Successfully Deleted" });

};



exports.getAllbooks = getAllbooks;
exports.addBook =addBook;
exports.getById = getById;
exports.updateBook = updateBook;  
exports.deleteBook = deleteBook;