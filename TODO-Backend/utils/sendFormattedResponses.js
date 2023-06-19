module.exports = {
    sendSuccessMessage: (
        res,
        body = {},
        message = "Done Successfully",
    ) => {
        return res.send({message, body});
    },
    sendErrorMessage: (
        res,
        message = "Action couldn't completed",
        body = {},
        status = 500
    ) => {
        return res.status(status).send({message, body})
    }
}
