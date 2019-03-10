const speakeasy = require("speakeasy");

const tokenValidator = async (base32secret, token) => {
  const verified = speakeasy.totp.verify({
    secret: base32secret,
    encoding: 'base32',
    token: token
  });
  return verified;
};

module.exports.tokenValidator = tokenValidator;