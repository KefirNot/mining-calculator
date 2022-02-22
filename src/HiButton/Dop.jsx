
export default function Random() {
    var arr = ['Hi', 'Hello', 'Privet', 'Zdorova', 'Good morning', 'ХУЁРНИНГ!', 'Have a good day'];
    var random = Math.floor(Math.random()* arr.length);
    console.log(arr[random]);
}