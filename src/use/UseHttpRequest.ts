import axios from "axios";
// const baseUrl = "http://localhost/api";
const baseUrl = "http://edusims.lclevels.com/api";
const filterEndpoint = baseUrl + '/' + 'filter'
const selectableEndpoint = baseUrl + '/' + 'selectable'
//**==> [x][Done]
async function GetAll(http: object): Promise<object> {
    return await axios.get(
        baseUrl + '/' +
        http.endpoint
        , { params: http.params }
    )
}

//**==> []
async function GetObject(key: string, http: object): Promise<object> {
    return await axios.get(
        baseUrl + '/' +
        http.endpoint + "/" +
        key
    );
}
//**==> []

//**==> []
async function FindByAny(obj: object, http: object) {
    return await axios.post(
        baseUrl + '/' +
        http.endpoint
        , obj
    )
}

//**==> [x][Done]
async function Trash(key: string, http: object) {
    return await axios.delete(
        baseUrl + '/' +
        http.endpoint + '/' +
        key
        , { params: http.params }
    )
}

//**==> []
async function Delete(key: string, obj: object, http: object) {
    return await axios.post(
        baseUrl + '/' +
        http.endpoint + '/delete'
        , obj
    )
}

//**==> []
async function Create(obj: object, http: object) {
    return await axios.post(
        baseUrl + '/' +
        http.endpoint
        , obj
    )
}

//**==> []
async function Update(obj: object, http: object) {
    return await axios.put(
        baseUrl + '/' +
        http.endpoint + '/' +
        http.modelKey
        , obj
    )
}

//**==> []
async function Search(keyWords: Array, http: object) {
    return await axios.get(
        filterEndpoint + '/' +
        http.endpoint
        , { params: http.params }
    )
}

async function GetSelectableData(http: object) {
    return await axios.get(
        selectableEndpoint + '/' +
        http.endpoint
        , { params: http.params }
    )
}

export {
    GetAll,
    GetObject,
    FindByAny,
    Trash,
    Delete,
    Create,
    Update,
    GetSelectableData
};