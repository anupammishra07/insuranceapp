export function postApi(url: string, type: string, headers: any, data: any) {
    Object.assign(headers, { "Content-Type": "application/json" });
    return fetch(url, {
      method: type,
      headers: headers,
      body: data,
    });
  }
  
  export function getApi(url: string, type: string, headers: any) {
    Object.assign(headers, { "Content-Type": "application/json" });
  
    return fetch(url, {
      method: type,
      headers: headers,
    });
  }
  