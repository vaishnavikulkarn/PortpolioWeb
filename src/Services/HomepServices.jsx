import axios from "axios";

export  class HomepServices {

    static serverURL="http://localhost:8000/info"

    static getInfo(){
       let dataURL=`${this.serverURL}/info`
       return axios.get(dataURL)
    }
}