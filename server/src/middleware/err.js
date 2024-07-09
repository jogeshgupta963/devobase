export const errorHandler = (err, req, res, next) => {
    return res.status(400).json({
        success: false,
        data: err,
    });
};
