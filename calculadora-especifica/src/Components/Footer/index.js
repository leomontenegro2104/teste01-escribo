import './style.css';
import logoLinkedin from '../../assets/linkedin.png';
import logoGithub from '../../assets/github.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__information'>
                <div className='information__text'>
                    <strong>Desenvolvido por:</strong>
                    <span>👨Leonardo Montenegro</span>
                    <span>📞(75) 9 9930-1591</span>
                    <span>📩eng.leonardomontenegro@gmail.com</span>
                </div>

            </div>
            <div className='information__media'>
                <a href='https://www.linkedin.com/in/leonardo-montenegro-693b30b5/'>
                    <img className='logo-linkedin' src={logoLinkedin} alt='linkedin' />
                </a>
                <a href='https://github.com/leomontenegro2104'>
                    <img className='logo-github' src={logoGithub} alt='github' />
                </a>
            </div>
        </footer>
    )
}