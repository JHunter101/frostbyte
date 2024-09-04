"use strict";
function classAdd(elem, classA) {
    elem.classList.add(classA);
}
function classRemove(elem, classA) {
    elem.classList.remove(classA);
}
function classToggle(elem, classA) {
    elem.classList.toggle(classA);
}
function spoilerToggle(elem) {
    classToggle(elem, 'blur');
}
function classSwap(elem, classA, classB) {
    if (elem.classList.contains(classA)) {
        elem.classList.remove(classA);
        elem.classList.add(classB);
    }
    else {
        elem.classList.remove(classB);
        elem.classList.add(classA);
    }
}
function displayToggle(elem) {
    const element = document.getElementById(elem);
    const classesToCheck = ['hidden', 'desktop-only', 'mobile-only'];
    const hasAnyClass = classesToCheck.some((className) => element.classList.contains(className));
    if (hasAnyClass) {
        unhide(elem);
    }
    else {
        hide(elem);
    }
}
function unhide(elem) {
    const element = document.getElementById(elem);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
    if (element.classList.contains('mobile-only')) {
        element.classList.remove('mobile-only');
        element.classList.add('mobile-only-off');
    }
    if (element.classList.contains('desktop-only')) {
        element.classList.remove('desktop-only');
        element.classList.add('desktop-only-off');
    }
}
function hide(elem) {
    const element = document.getElementById(elem);
    if (element.classList.contains('mobile-only-off')) {
        element.classList.remove('mobile-only-off');
        element.classList.add('mobile-only');
    }
    else if (element.classList.contains('desktop-only-off')) {
        element.classList.remove('desktop-only-off');
        element.classList.add('desktop-only');
    }
    else {
        element.classList.add('hidden');
    }
}
function clear(elem) {
    document.getElementById(elem).innerHTML = '';
}
function indexDictExtract(indexes, dict) {
    const output = {};
    let i = 0;
    for (const [key, value] of Object.entries(dict)) {
        if (indexes[i]) {
            output[key] = value;
        }
        if (dict[i]) {
            output[key] = value;
        }
        i++;
    }
    return output;
}
function swapElems(elem1, elem2, animate) {
    const div1 = typeof elem1 === 'string' ? document.getElementById(elem1) : elem1;
    const div2 = typeof elem2 === 'string' ? document.getElementById(elem2) : elem2;
    if (div1 && div2) {
        const tempContent = div1.innerHTML;
        div1.innerHTML = div2.innerHTML;
        div2.innerHTML = tempContent;
        if (animate) {
            div1.classList.add('slide-in-right');
            div2.classList.add('slide-in-left');
            setTimeout(() => {
                div1.classList.remove('slide-in-right');
                div2.classList.remove('slide-in-left');
            }, 500);
        }
    }
}
function findElemFromRoot(root, targetClass) {
    const rootDiv = typeof root === 'string'
        ? document.getElementById(root)
        : root;
    return rootDiv === null || rootDiv === void 0 ? void 0 : rootDiv.querySelector(`.${targetClass}`);
}
