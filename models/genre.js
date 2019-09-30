const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: {type: String, required: true, max: 100, min: 3},
  }
);

// 虚拟属性'url'：藏书副本 URL
genreSchema
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });

// 导出 模型
module.exports = mongoose.model('Genre', genreSchema);