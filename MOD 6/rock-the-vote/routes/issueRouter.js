const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/issue.js")

// Get all posts

issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})


// Get all user's posts

issueRouter.get("/:userId", (req, res, next) => {
    Issue.find({ user: req.params.userId }, (err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Post new user issue

issueRouter.post("/:userId", (req, res, next) => {
    req.body.user = req.params.userId
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// Post new comment on an issue




// Put update your own issue

issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate({ _id: req.params.issueId },
        req.body,
        { new: true }, (err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        })
})



module.exports = issueRouter