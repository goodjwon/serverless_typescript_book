type UNIQID = string | null
function getUerId(id: UNIQID){
    console.log(id)
}
getUerId('adsf')
getUerId(null)

type USER_TYPE = 'TESTER' | 'ADMIN'

let uerType: USER_TYPE = 'TESTER'