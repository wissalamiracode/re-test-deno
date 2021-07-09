// TODO: modify the body object!
let body ="";
  let isempty=false;
   for(const[k,v] of Object.entries(event.parameter)){
     let trimvalues=v.trim();
     if(trimvalues!== ""){
       body+=`<br>${k} : ${trimvalues}`;
     }else{
       isempty=true;
       break;
     }
   }
  export async function handler (req: object) {
    if(! isempty){
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
  }
}

// Example responses

/* Forward requester to a new path
export async function handler (req: object) {
  return {
    statusCode: 302,
    headers: {
      'location': '/about',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
*/

/* Respond with successful resource creation
export async function handler (req: object) {
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({ok: true})
  }
}
*/

/* Deliver client-side JS
export async function handler (req: object) {
  return {
    headers: {
      'content-type': 'text/javascript; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: 'console.log("Hello world!")',
  }
}
*/
