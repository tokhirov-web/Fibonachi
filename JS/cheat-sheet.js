// let hotel = [
//     [
//         {
//             room: 1,
//             price: 300,
//             brand: "Luxe",
//             children: false,
//         },
//         {
//             room: 2,
//             price: 4000,
//             brand: "Deluxe",
//             children: true,
//         },
//         {
//             room: 3,
//             price: 1000,
//             brand: "Deluxe",
//             children: false,
//         },
//         {
//             room: 4,
//             price: 900,
//             brand: "Luxe",
//             children: true,
//         },
//     ],
//     [
//         {
//             room: 5,
//             price: 700,
//             brand: "Luxe",
//             children: true,
//         },
//         {
//             room: 6,
//             price: 79000,
//             brand: "President",
//             children: true,
//         },
//         {
//             room: 7,
//             price: 600,
//             brand: "Luxe",
//             children: false,
//         },
//         {
//             room: 8,
//             price: 950,
//             brand: "Luxe",
//             children: true,
//         },
//     ],
//     [
//         {
//             room: 9,
//             price: 1900,
//             brand: "Deluxe",
//             children: false,
//         },
//         {
//             room: 10,
//             price: 5000,
//             brand: "Deluxe",
//             children: true,
//         },
//         {
//             room: 11,
//             price: 1000,
//             brand: "Deluxe",
//             children: false,
//         },
//         {
//             room: 12,
//             price: 250,
//             brand: "Luxe",
//             children: false,
//         },
//     ],
//     [
//         {
//             room: 13,
//             price: 10000,
//             brand: "President",
//             children: true,
//         },
//         {
//             room: 11,
//             price: 8000,
//             brand: "President",
//             children: false,
//         },
//     ],
// ];

// let rooms = {
//     all_roms: [],
//     rooms: 0,
// };
// let brands = {
//     president: [],
//     deluxe: [],
//     luxe: [],
// };

// let room_level = {
//     "0": 0,
//     "1": 0,
//     "2": 0,
//     "3": 0,
// };



// for (let floor of hotel) {
//     for (let room of floor) {
//         let brand = room.brand.toLocaleLowerCase()
//         if (brands[brand]) {
//             brands[brand].push(room)
//         }
//         room.eating = Math.random().toFixed() >= 1

//         rooms.all_roms.push(room)
//         rooms.rooms++
//     }

//     room_level[hotel.indexOf(floor)] = floor.reduce((a, b) => a + b.price, 0)

// }

// rooms.all_roms = rooms.all_roms.sort((a, b) => a.room - b.room)

// let expensiveRoom = rooms.all_roms.reduce((a, b) => {
//     if (a.price > b.price) {
//         return a
//     } else {
//         return b
//     }
// })

// console.table(brands)
// console.log(rooms);
// console.log(expensiveRoom);
// console.log(room_level);


//   //1 отфильтровать по категориям *
//   //2 добавить ключ eting с буленовым значением в каждый номер
//   //3 посчитать и красиво раставить все команты переменную rooms
//   //4 найти самую дорогую комнату
//   //5 посчитать сколько стоит каждый этаж
//   //6 посчитать сколько стоят все комнаты вместе взятые
//   //7 найти все комнаты в которых живут дети