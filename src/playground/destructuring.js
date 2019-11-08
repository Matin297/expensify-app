// const book = {
//     title: 'Game of Thrones',
//     author: 'Goerge R.R Martin',
//     publisher: {
//         // name: 'HBO'
//     }
// }

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.72'];

const [itemName, , mediumSizePrice] = item;
console.log(`a medium ${itemName} costs ${mediumSizePrice}`);