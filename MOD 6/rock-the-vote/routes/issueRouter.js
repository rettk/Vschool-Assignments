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

issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
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

issueRouter.put("/:issueId")


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

// Up/Down Vote Issue

issueRouter.put("/upvote/:issueId", (req, res, next) => {
    try {
        const issue = Issue.findOne({ _id: req.params.issueId });
        if (issue.downVotes.includes(req.user._id)) {
            const updateDownVotes = Issue.findOneAndUpdate(
                { _id: req.params.issueId },
                {
                    // $inc: { downvote: -1 },
                    $pull: { downVotes: req.user._id }
                }
            )
        }

        if (issue.upVotes.includes(req.user._id)) {
            // res.status(403);
            throw new Error('Already upvoted!');
        }
        const updated = Issue.findOneAndUpdate(
            { _id: req.params.issueId },
            {
                // $inc: { upvote: +1 },
                $push: { upVotes: req.user._id }
            },
            { new: true }
        );
        return res.status(200).send(updated);
    } catch (err) {
        res.status(500);
        return next(err);
    }
})

issueRouter.put("/downvote/:issueId", async (req, res, next) => {
    try {
        const issue = await Issue.findOne({ _id: req.params.issueId });
        if (issue.votedUser.includes(req.user._id)) {
            res.status(403);
            throw new Error('You can only vote once per issue!');
        }
        const updated = await Issue.findOneAndUpdate(
            { _id: req.params.issueId },
            {
                $inc: { downvote: +1 },
                $push: { votedUser: req.user._id }
            },
            { new: true }
        );
        return res.status(200).send(updated);
    } catch (err) {
        res.status(500);
        return next(err);
    }
})


module.exports = issueRouter


