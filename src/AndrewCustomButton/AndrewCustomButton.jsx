export default function AndrewCustomButton({ children, compliment, complimentCount }) {
    const onClick = () => {
        for (let i = 0; i < complimentCount; i++) {
            console.log(compliment);
            console.log('---------');
        }
    }
    return (<button onClick={onClick}>{children}</button>);
}
