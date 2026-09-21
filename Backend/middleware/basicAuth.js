const basicAuth = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Basic ")) {
        return res.status(401).json({
            message: "Authentication required"
        });
    }

    const encodedCredentials = authHeader.split(" ")[1];

    const decodedCredentials = Buffer
        .from(encodedCredentials, "base64")
        .toString("utf-8");

    const [username, password] = decodedCredentials.split(":");

    if (
        username !== process.env.BASIC_AUTH_USERNAME ||
        password !== process.env.BASIC_AUTH_PASSWORD
    ) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    next();
};

module.exports = basicAuth;