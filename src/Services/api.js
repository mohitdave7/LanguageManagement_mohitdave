const token = localStorage.getItem("LanguageToken")

//To get data
function getData(Url) {
    return fetch(`${Url}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(responseData => {
        return responseData;
      })
      .catch(err => {
        console.log("error", err);
      });
  }
  
//To post data
function postData(Url,body) {
    return fetch(`${Url}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(body)
    })
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(responseData => {
        return responseData;
      })
      .catch(err => {
        console.log("error", err);
      });
  }


  function Deletedata(Url) {
    return fetch(`${Url}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(responseData => {
        return responseData;
      })
      .catch(err => {
        console.log("error", err);
      });
  }


  export  function login(body ) {
    return postData("http://52.16.69.240:3000/api/admin/login",body);        
  }
export function homedata(){
  return getData("http://52.16.69.240:3000/api/label/get-language");        
}

export  function addlanguage(body ) {
  return postData(" http://52.16.69.240:3000/api/label/add-language",body);        
}
export function removelanguage(id){
  return Deletedata(`http://52.16.69.240:3000/api/label/delete-language/${id}`)
}
