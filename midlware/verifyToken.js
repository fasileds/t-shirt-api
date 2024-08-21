import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.json("toke is not valide");
      }
      req.user = user;
      next();
    });
  } else {
    res.json("there is no token");
  }
};

export const varifyTokenAndAuthorizetion = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.json("you are not allwoed to do that");
    }
  });
};
export const varifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.json("you are not allwoed to do that");
    }
  });
};
