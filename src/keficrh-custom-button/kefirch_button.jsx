export default function KefirchCustomButton({ children, abuze, abuzeCount }) {
    const onClick = () => {
        for (let i = 0; i <abuzeCount; i++) {
            console.log(abuze);
            console.log('_______');
        }


    }
    return <button onClick={onClick}>{children}</button>;
}