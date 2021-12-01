// class Api {
//   static async headers() {
//     return {
//       "Content-Type": "application/json",
//       mode: "no-cors",
//       Accept: "*/*",
//       "Access-Control-Allow-Origin": "*",
//       "x-auth-token": localStorage.getItem("token"),
//       //"files" :
//     };
//   }
//   static async headersMultiForm() {
//     return {
//       "Content-Type": "multipart/form-data",
//       "Access-Control-Allow-Origin": "http://localhost:3000",
//     };
//   }
//   static get(route: any) {
//     return this.xhr(route, null, "GET");
//   }
//   static put(route: any, params: any) {
//     return this.xhr(route, params, "PUT");
//   }
//   static patch(route: any, params: any) {
//     return this.xhr(route, params, "PATCH");
//   }
//   static post(route: any, params: any) {
//     return this.xhr(route, params, "POST");
//   }
//   static delete(route: any) {
//     return this.xhr(route, null, "DELETE");
//   }
//   static putMultiForm(route: any, parama: any) {
//     return this.xhrMultiForm(route, parama, "PUT");
//   }
//   static postMultiForm(route: any, parama: any) {
//     return this.xhrMultiForm(route, parama, "POST");
//   }
//   static async xhrMultiForm(route: any, params: any, verb: any) {
//     const host = "https://market221.herokuapp.com/api/v1/";
//     const url = `${host}${route}`;
//     let options = Object.assign(
//       { method: verb },
//       params ? { body: params } : null
//     );
//     options.headers = await Api.headersMultiForm();
//     return fetch(url, options)
//       .then((resp) => {
//         let json = resp.json();
//         if (resp.ok) {
//           if (route === "login") {
//             this.setStorage(resp);
//           }
//           return json;
//         }
//         return json.then((err) => {
//           throw err;
//         });
//       })
//       .then((json) => {
//         if (route === "login") {
//           this.setAuth(json);
//         }
//         return json;
//       });
//   }
//   static async xhr(route: any, params: any, verb: any) {
//     const host = "https://market221.herokuapp.com/api/v1/";
//     const url = `${host}${route}`;
//     let options = Object.assign(
//       { method: verb },
//       params ? { body: JSON.stringify(params) } : null
//     );
//     options.headers = await Api.headers();
//     return fetch(url, options)
//       .then((resp) => {
//         let json = resp.json();
//         if (resp.ok) {
//           return json;
//         }
//         return json.then((err) => {
//           throw err;
//         });
//       })
//       .then((json) => {
//         return json;
//       });
//   }
// }
// export default Api;

//@ts-ignore
import * as React from 'react';
