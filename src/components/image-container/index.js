import './index.css'

export default function Image(){
    return(
        <section>
            <div className='items'>
                <div className='icon-container'>
                    <img src="img/icon/icon1.jpg" className='icon-image' alt='icon'/>
                    <div className='name-text'>IGOR OLIVEIRA</div>
                </div>

                <div className='text-container'>
                    <div className='big-text'>FULL STACK</div>
                    <div className='sub-text'>WEB DEVELOPER</div>
                </div>
            </div>
        </section>
    )
}