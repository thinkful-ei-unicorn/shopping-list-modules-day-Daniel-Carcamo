function validateName(name) {
    if (name.length === 0) {
        throw new TypeError("Name must not be blank");
    }
}

function create(name) {
    const item = {};
    item.id = cuid();
    item.name = name;
    item.checked = false;
    return item;
}


export default {
    validateName,
    create
};