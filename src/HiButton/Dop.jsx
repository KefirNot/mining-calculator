
export default function Random() {
    const arr = ['Hi', 'Hello', 'Privet', 'Zdorova', 'Good morning', 'ХУЁРНИНГ!', 'Have a good day'];
    const random = Math.floor(Math.random()* arr.length);
    console.log(arr[random]);
}