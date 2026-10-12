let fs = require("fs");

class Employee {
  constructor(username, password, position) {
    this.username = username
    this.password = password
    this.position = position
    this.login = false;
  }

  static register(name, password, role, cb) {
    this.findAll((err, data) => {
      if (err) {
        console.log(err);
      } else {
        let obj = new Employee(name, password, role)
        let newData = data;
        newData.push(obj);
        let objArr = [];

        objArr.push(obj);
        objArr.push(newData.length);

        fs.writeFile("./employee.json", JSON.stringify(newData), (err) => {
          if (err) {
            console.log(err);
          } else {
            cb(err, objArr);
          }
        })
      }
    });
  }

  // lanjutkan method lain

  static findAll(cb) {
    fs.readFile("./employee.json", "utf8", (err, data) => {
      if (err) {
        cb(err)
      } else {
        cb(err, JSON.parse(data));
      }
    })
  }

  static findByName( username, cb ){
    this.findAll((err, data) =>{
      if (err) cb(err);
      else{
        const found = data.find(emp => emp.username == username);
        cb(null, found);
      }
    })
  }

  static update( username, newData, cb ){
    this.findAll( (err, data) => {
      if(err) cb(err);
      else{
        const index = data.findIndex(emp => emp.username == username);
        if( index === -1 ) return cb("User bot found")
        
        // ini berguna untuk menimpa data yang lama menjadi nilai data yang baru, harus menggunakan titik karna spread operator urutan {... data lama, ...data baru}
        data[index] = { ...data[index], ...newData}

        fs.writeFile("./employee.json", JSON.stringify(data), (err) => {
          if(err) cb(err)
          else cb(null, data[index])
        })
      }
    })

  }

  static delete( username, cb ){
    this.findAll((err,data) => {
      if(err) cb(err);
      else{
        const filtered = data.filter(emp => emp.username !== username);
        fs.writeFile("./employee.js", JSON.stringify(filtered), err => {
          if(err) cb(err);
          else cb(null, `${username} berhasil dihapus`)
        })
      }
    })

  }

}


module.exports = Employee;