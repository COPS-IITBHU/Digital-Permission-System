const adminEmails = [
  "doaa@iitbhu.ac.in",
  "dosa@iitbhu.ac.in",
  "registrar@iitbhu.ac.in",
];

const adminCheckMiddleware = (req, res, next) => {
  if (!req.isAuthenticated() || !req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (adminEmails.includes(req.user.email)) {
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};

module.exports = adminCheckMiddleware;
