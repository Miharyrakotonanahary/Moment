 var array = document.getElementsByClassName("second-carte-arg-desc");
 var arrayFirst = document.getElementsByClassName("carte-desc");
for (let i = 0; i < arrayFirst.length; i++) {
    arrayFirstContent = arrayFirst[i].textContent;
    if (arrayFirstContent.length > 120) {
        arrayFirstTronque = arrayFirstContent.slice(0, 120);
        arrayFirst[i].textContent = arrayFirstTronque + "..."
    }
}
for (let index = 0; index < array.length; index++) {
    arrayContent = array[index].textContent;
    if (arrayContent.length > 422) {
        arrayTronque = arrayContent.slice(0, 380);
        array[index].textContent = arrayTronque + "..."
    }
}
