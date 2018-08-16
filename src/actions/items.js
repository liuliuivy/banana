import uuid from 'uuid';

export const addItem = (name) => ({
    type: 'ADD_ITEM',
    item: {
        id: uuid(),
        name
    }
});

export const deleteItem = (id) => ({
    type: 'REMOVE_ITEM',
    id
});