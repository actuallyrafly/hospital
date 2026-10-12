const { log } = require("console");

class HospitalView {
    static registerView(objArr) {
        console.log(`save data success {"username":${objArr[0].username},"password":${objArr[0].password},"role":${objArr[0].position}. Total employee : ${objArr[1]}`)
    }
    
    // lanjutkan method lain
    static loginSucces(usn){
        console.log(`Login berhasil, Selamat Datang ${usn.username} sebagai ${usn.position}`);
    }

    static loginFailed(reason){
        console.log(`Login gagal : ${reason}`);
        
    }

    static findByNameView(found){
        console.log(`Search By Name Succes\n${found}`);
    };

    static updateView(data){
        console.log(`Update Data Succes\n${data}`);
    };

    static delete(data){
        console.log(`Delete Data Succes\n${data}`);
    };

    static ErrorView(err){
        console.log(`Error : ${err}`);
    };
}


module.exports = HospitalView;