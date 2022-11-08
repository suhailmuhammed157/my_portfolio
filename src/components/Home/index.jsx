import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className='container home-page'>
            <div className='text-zone'>

                <h1>Hi, <br/> I'm
                <img alt='dev' src={LogoTitle}/>
                uhail
                <br/>
                Full stack developer
                </h1>
                <h2>Nodejs / ReactJs / Flutter / PostgreSQL</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}