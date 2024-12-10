import './index.css';



export default function Button(props) {
    const {
        children, 
        size='md', 
        variant='bordered', 
        disabled, 
        type='button'} = props;
    const classNameButton = 
        disabled ? `button ${variant} ${size} ${type} disabled` : 
        `button ${variant} ${size} ${type}`
    
    return <button onClick={() => console.log('Кнопка нажата!!!')} className={classNameButton}>{children}</button>
}