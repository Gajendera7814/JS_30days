/*
    Event Bubbling:

    Event bubbling is a form of event propagation in which an event is first triggered on the innermost (target) element 
    and then propagates upward through its ancestor elements in the DOM hierarchy, eventually reaching the outermost element.

*/

document.querySelector("#grandParent").addEventListener("click", () => {
    console.log("Grand Parent clicked");
}, true);

document.querySelector("parent").addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

document.querySelector("child").addEventListener("click", () => {
    console.log("Child clicked");
}, false);
