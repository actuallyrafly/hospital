let fs = require('fs');

class Patient{
    constructor(id, namaPasien, penyakit){
        this.id = id
        this.namaPasien = namaPasien
        this.penyakit = penyakit
    }

    static addPatient(id, namaPasien, penyakit, cb){
        this.findall((err, data) => {
            if(err){
                console.log(err);
            }else{
                let obj = new patient(id, namaPasien, penyakit)
                let newData = data;
                newData.push(obj);
                let objArr = [];

                objArr.push(obj);
                objArr.push(newData.length);

                fs.writeFile("/patient.json",JSON.stringify(newData),(err) => {
                    if(err){
                        cb(err);
                    }else{
                        cb(err, objArr);
                    }
                })
            }
        })
    }

    static findall(cb){
        fs.readFile("/patient.json", "utf-8",(err, data) => {
            if(err) cb(err)
            else{
            cb(err, JSON.parse(data))    
            }
        });
    }
}

module.exports = Patient;