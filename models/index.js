const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development"; // 개발용 환경 설정
const config = require("../config/config.json")[env]; // Sequelize 설정 파일

// Sequelize 인스턴스화
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

module.exports = sequelize;
