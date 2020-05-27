/*
*** Route = string ('url')
*** Methode = string ('POST', 'GET', ...)
*** body = object (si utilisation de méthode Post, ...)
*** authorization = string ('Token', si l'utilisateur est connecté)
*/

const fetchData = (route, method, body, authorization) => {
  if (authorization === undefined) {
    if (body === undefined) {
      return fetch(route, {method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
        },
      })
      .then((res)=>{
          if (res.status !== 200) {
             console.log(res.status);
             return res.status;
          }
          return res.json();
        })
    }
    else {
      return fetch(route, {method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
        },
        body : JSON.stringify(body)
      })
      .then((res)=>{
          if (res.status !== 200) {
             console.log(res.status);
             return res.status;
          }
          return res.json();
        })
    }
  }
  else {
    if (body === undefined) {
      return fetch(route, {method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Authorization': authorization
        },
      })
      .then((res)=>{
          if (res.status !== 200) {
             console.log(res.status);
             return res.status;
          }
          return res.json();
        })
    }
    else {
      return fetch(route, {method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Authorization': authorization
        },
        body : JSON.stringify(body)
      })
      .then((res)=>{
          if (res.status !== 200) {
             console.log(res.status);
             return res.status;
          }
          return res.json();
        })
    }
  }
}

export default fetchData;
