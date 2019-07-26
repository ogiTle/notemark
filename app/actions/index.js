export const FETCH_ALL   = "FETCH_ALL_ITEMS";
export const SELECT_ITEM = "SELECT_ITEM";
export const CREATE_ITEM = "CREATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM   = "EDIT_ITEM";
export const SAVE_ITEM   = "SAVE_ITEM";
export const GO_TO_HOME  = "GO_TO_HOME";

export const PAGE_STATE = {
  HOME: "HOME",
  VIEWING: "VIEWING",
  EDITING: "EDITING"
};

export function fetchAll() {
  /*
  return function() {
    //let myHeaders = new Headers();
    //myHeaders.append('origin', 'abc');
    fetch("http://localhost:1339/note", 
          {
            //'headers': myHeaders
          }).then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log(response);
    });
  }
  */

  let fetchAllPromise = fetch("http://localhost:1339/note", {
                                //'headers': myHeaders
                              }).then(function(response) {
    return response.json();
  }).then(function(response) {
    response.notes.push({
      'id': 1111,
      'title': '1111',
      'content': 'third article',
      'time': "time" 
    });
    return response;
  });
  return {
    type: FETCH_ALL,
    payload: fetchAllPromise
  }
}

export function selectItem(id) {
  return {type: SELECT_ITEM, id: id};
}

export function createItem() {
  return {type: CREATE_ITEM};
}

export function deleteItem(id) {
  return {type: DELETE_ITEM, id: id};
}

export function editItem(id) {
  return {type: EDIT_ITEM, id: id};
}

export function saveItem(item) {
  return {type: SAVE_ITEM, item: item};
}

export function goToHome() {
  return {type: GO_TO_HOME};
}


