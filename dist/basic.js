"use strict";
function spoiler(elem) {
    elem.classList.toggle('blur');
}
function addClass(elem, classA) {
    elem.classList.add(classA);
}
function removeClass(elem, classA) {
    elem.classList.remove(classA);
}
function toggleClass(elem, classA) {
    elem.classList.toggle(classA);
}
function swapClass(elem, classA, classB) {
    if (elem.classList.contains(classA)) {
        elem.classList.remove(classA);
        elem.classList.add(classB);
    }
    else {
        elem.classList.remove(classB);
        elem.classList.add(classA);
    }
}
function toggle_elem(elem) {
    const element = document.getElementById(elem);
    const classesToCheck = ['hidden', 'desktop-only', 'mobile-only'];
    const hasAnyClass = classesToCheck.some((className) => element.classList.contains(className));
    if (hasAnyClass) {
        unhide_elem(elem);
    }
    else {
        hide_elem(elem);
    }
}
function unhide_elem(elem) {
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
function hide_elem(elem) {
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
function clearBox(elem) {
    document.getElementById(elem).innerHTML = '';
}
function range(start, end, step = 1) {
    const result = [];
    for (let i = start; i < end; i += step) {
        result.push(i);
    }
    return result;
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
function swap_elems(elem1, elem2) {
    // If elem1 or elem2 is a string, treat it as an ID and find the element.
    // Otherwise, assume it's already an HTMLElement.
    const div1 = typeof elem1 === 'string' ? document.getElementById(elem1) : elem1;
    const div2 = typeof elem2 === 'string' ? document.getElementById(elem2) : elem2;
    if (div1 && div2) {
        // Swap the elements
        const tempContent = div1.innerHTML;
        div1.innerHTML = div2.innerHTML;
        div2.innerHTML = tempContent;
        div1.classList.add('slide-in-right');
        div2.classList.add('slide-in-left');
        // Clean up classes after animation
        setTimeout(() => {
            div1.classList.remove('slide-in-right');
            div2.classList.remove('slide-in-left');
        }, 500); // Match the duration of the sliding animation
    }
}
function find_local_elem(root, targetClass) {
    const rootDiv = typeof root === 'string'
        ? document.getElementById(root)
        : root;
    return rootDiv === null || rootDiv === void 0 ? void 0 : rootDiv.querySelector(`.${targetClass}`);
}
