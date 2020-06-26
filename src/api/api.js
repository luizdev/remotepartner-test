//import axios from "axios";
import comments from './mock/data/reviews.json'

class Api {
  constructor() {}
  /*getComments() {
    return axios
      .get("url").then(function(rescommentsponse) {
        return comments;
      })
      .catch(e => ({ error: e }));
  }*/
  getComments() {
    return {
      comments
    }
  }
}

const api = new Api();

export default api;