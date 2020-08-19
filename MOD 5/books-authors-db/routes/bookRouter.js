const express = require("express")
const bookRouter = express.Router()
const Book = require("../models/book.js")

//get all
bookRouter.get("/", (req, res, next) => {
    Book.find((err, books) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

//get by author
bookRouter.get("/:authorId", (req, res, next) => {
    Book.find({ author: req.params.authorId }, (err, books) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})


//Add new book
bookRouter.post("/:authorId", (req, res, next) => {
    req.body.author = req.params.authorId
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

//Like a book (but doesn't work because you could like over and over)
bookRouter.put("/like/:bookId", (req, res, next) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookId },
        {
            $inc: { likes: 1 },
            // $pull: { relatedTopics: "some topic" }   could have multiple things
        },
        { new: true },
        (err, updatedBook) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})


//find books by likes greater than or equal to 2
bookRouter.get("/search/bylikes", (req, res, next) => {
    // could do gte(req.query.likeamount) to allow user to select >= range.
    Book.where("likes").gte(2).exec((err, books) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})



module.exports = bookRouter