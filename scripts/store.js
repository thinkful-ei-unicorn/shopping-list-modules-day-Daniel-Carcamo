import item from './item.js';

const items = [];
let hideCheckedItems = false;

function findById(id) {
   let list = store.items;
   let found = list.find(item => id === item.id)
   return found;
};

function addItem(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch (error) {
        console.log(`${error.message}`);
    }
};

function findAndToggleChecked(id) {
    let item = this.findByItem;
    item.checked = !item.checked;
};

function findAndUpdateName(id, newName) {
    try {
        item.validateName(name);
        let currentItem = this.findById(name);
        currentItem.name = name;
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`)
    }
};

function findAndDelete(id) {
    this.items = this.items.filter(item => item.id !== id);
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
};

