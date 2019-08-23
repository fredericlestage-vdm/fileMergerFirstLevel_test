function merge(oldObject, newObject, propPath, onValue) {
  let newObjects = DeepObject.get(newObject, propPath);

  // Get an Object of the new ids using the onValue
  let newIds = {};
  for (let newItem of newObjects) {
    newIds[DeepObject.get(newItem, onValue)] = newItem;
  }

    let items = DeepObject.get(oldObject, propPath);

    let result;
    if (propPath != '')
      result = this.mergeFirstLevel(
        oldObject,
        newObject,
        propPath
      );
    else result = oldObject;

    // Update the object if there's a match.
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let id = DeepObject.get(item, onValue);
      if (newIds[id]) {
        items.splice(i, 1, newIds[id]);
        delete newIds[id];
      }
    }
    // Or add as a new one.
    items = items.concat(Object.values(newIds));

    DeepObject.set(result, propPath, items);
    return result;
}

function mergeFirstLevel(oldObject, newObject, propPath) {
  if (newObject[propPath]) delete newObject[propPath];
  if (oldObject[propPath]) delete oldObject[propPath];

  Object.assign(oldObject, newObject);

  return newObject;
}
