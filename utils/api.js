var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function requestOptions(type,data){
    return {
        method: type,
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
      };
}

export const register=(data)=>{
    return fetch('/api/registro',requestOptions('POST',data)).then(response=>response.json())
}

export const loginApi =(data)=>{
    return fetch('/api/login',requestOptions('POST',data)).then(response=>response.json());
}
//commit