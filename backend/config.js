module.exports = {
  MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/eventapp",
  JWT_SECRET: process.env.JWT_SECRET || "secret123"
};
