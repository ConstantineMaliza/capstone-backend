export const validateName = (req, res, next) => {
    let fullname = req.body.fullname;

    if (!fullname.includes(' ')) {
        res.status(400).json({
            message: "Full name needed"
        })

    }
    else if (fullname.length < 4) {
        res.status(400).json({
            message: "name too short"
        })
    } else {
        next();
    }
}

