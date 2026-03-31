import './Benefits.css'
import odam1 from '../../assets/odam1.png'
import odam2 from '../../assets/odam2.png'
import odam3 from '../../assets/odam3.png'

const Benefits = () => {
  return (
    <div id='benefits'>
      <h1 className='Ben'>BENEFITS  OF HIKING</h1>
      <h2>For You</h2>
      <div id='Bene' className="benefits">
        <div>
          <img src={odam1} alt="" />
          <h1>Physical Exercise</h1>
          <p>Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
        </div>
        <div>
          <img src={odam2} alt="" />
          <h1>Mental Health</h1>
          <p>Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
        </div>
        <div>
          <img src={odam3} alt="" />
          <h1>Connect with nature</h1>
          <p>Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
        </div>
      </div>
    </div>
  )
}

export default Benefits