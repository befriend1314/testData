const mongoose = require('./db')
const Schema = mongoose.Schema;

const ceshiSchema = new Schema({
  title: String,
  body: String,
  footer: String
});

const MyModel = mongoose.model('pic', ceshiSchema);


class Mongodb {
  constructor () {

  }
// 查询
  query () {
     return new Promise((resolve, reject) => {
       MyModel.find({}, (err, res) => {
         if(err) {
           reject(err)
         }
         resolve(res)
       })
     })
  }
// 保存
  save (obj) {
     const m = new MyModel(obj)
     return new Promise((resolve, reject)=> {
       m.save((err, res) => {
         if (err) {
           reject(err)
         }
         resolve(res)
       })
     })
     
  }
}
module.exports = new Mongodb()