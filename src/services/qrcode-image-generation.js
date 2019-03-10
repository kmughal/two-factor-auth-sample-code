const qrcode = require("qrcode");

const generateImage = async (dataUrl) => {
  const imageUrl = await qrcode.toDataURL(dataUrl);
  console.log("imageurl: ", imageUrl);
  return imageUrl;
};

module.exports.generateImage = generateImage;