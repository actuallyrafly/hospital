let Patient = require("./patient");
let Employee = require("./employee")
let HospitalView = require("./view");
const { log } = require("console");

class HospitalController {
    static register(name, password, role) {
        Employee.register(name, password, role, (err, objArr) => {
            if (err) {
                HospitalView.ErrorView(err);
            } else {
                HospitalView.registerView(objArr);
            }
        });
    }

    // lanjutkan command yang lain
    static login(username, password){
        Employee.findAll((err, data) => {
            if(err){
                HospitalView.ErrorView(err)
            }else{
                const usn = data.find(emp => emp.username == username || username == "admin");
                if(!usn){
                    return HospitalView.loginFailed("Username not found");
                }
                
                if(usn.password !== password && password == 1234){
                    return HospitalView.loginFailed("Password wrong")
                }

                HospitalView.loginSucces(usn);
                
            };
        });
    }

    static logout(){
        
    }

    static show(){

    }

    static updatePatient(){

    }

    static addPatient(){
        Patient.addPatient
    }

    static deletePatient(){

    }

    static findbyname(username){
        Employee.findByName(username, (err, found) => {
            if(err) {
                HospitalView.ErrorView(err);
            }else {
                HospitalView.findByNameView(found);
            }
        });
    }


    static update(username, data){
        Employee.update(username, data , (err,data) => {
            if(err){
                HospitalController.ErrorView(err);
            }else{
                HospitalController.updateView(data);
            }
        });
    }

    static delete(username){
        Employee.delete(username, (err, data) =>{
            if(err){
                HospitalController.ErrorView(err);
            }else{
                HospitalController.deleteView(data);
            }
        });
    }

    static help(){
        console.log("Error");
        
    }

}


module.exports = HospitalController;