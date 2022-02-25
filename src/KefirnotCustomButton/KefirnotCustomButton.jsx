export default function KefirnotCustomButton({ children, abuze, abuseCount }) {
    const onClick = () => {
        for (let i = 0; i < abuseCount; i++) {
            console.log(abuze);
            console.log('---------');
        }
    }
    return (<button onClick={onClick}>{children}</button>);
}
