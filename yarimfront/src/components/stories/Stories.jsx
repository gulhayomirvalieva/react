import './Stories.css'
import Left from '../../assets/Left.png'
import Left1 from '../../assets/Left1.png'
import Right from '../../assets/Right.png'
import lgoimg1 from '../../assets/logo.png'

const Stories = () => {
  return (  
    <div id='Stories'>
      <h1 className='h1'>What Hikers Say</h1>
      <h1 className='h2'>About Us</h1>

      <div className="Cameron">
        <img style={{ marginLeft: '0px' }} src={Left} alt="" />
        <img src={Left1} alt="" />
        <div className="Cameron_div">
          <img src={lgoimg1} alt="" />
          <p>Amet minim mollit non deserunt ullamco est Sit aliqua dolor do amet sint.Amet minim mollit Non deserunt ullamco est sit aliqua dolor do Amet sint.Amet minim mollit non deserunt ullamco Est sit aliqua dolor do amet sint.Amet minim Mollit non deserunt ullamco est sit aliqua dolor Do Amet sint.</p>
          <h1>Cameron Williamson</h1>
        </div>
        <img src={Right} alt="" />
      </div>

      <div className='Stor_span_div'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Stories