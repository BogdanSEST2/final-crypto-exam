import './index.css';



export default function Button(props) {
    const {
        children, 
        size='md', 
        variant='bordered', 
        disabled, 
        type='button',
        onClick=(() => {
            console.log('Кнопка нажата');
        })
    } = props;
    const handleClick = typeof onClick === 'function' ? onClick : () => {};
    const classNameButton = disabled ? `button ${variant} ${size} ${type} disabled` : `button ${variant} ${size} ${type}`
    return <button 
        onClick={handleClick} 
        className={classNameButton}
    >{children}</button>
}