import './Footer.css';

function Footer({storeName ,info, content}){
    return <div className='footer'>
        <h1 className='footer-name'>{storeName}</h1>
        <p className='footer-info'>{info}</p>
        <p className='footer-content'>{content}</p>
    </div>
}

export default Footer;