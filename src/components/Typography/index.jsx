import './index.css';


export default function Typography(props) {
    const {size='md', children} = props;
    return <p 
        className={`typography ${size}`}
        {...props}    
    >{children}</p>
}