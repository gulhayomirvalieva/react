import './Hikes.css'
import img1 from '../../assets/img11.png'
import img2 from '../../assets/img22.png'
import img3 from '../../assets/img33.png'
import img4 from '../../assets/img44.png'
import img5 from '../../assets/img66.png'
import img6 from '../../assets/img55.png'

const Hikes = () => {

  return (
    <div id='hik'>
      <h1 className='h1'>POPULAR HIKES</h1>
      <h2 className='h2'>In Sri Lanka</h2>
      <div className="hikes_collection">
        <div className="box">
          <div>
            <img src={img1} alt="" />
            <h1>Ella Hike</h1>
            <div className="icon">
              <span>
                <i class="fa-solid fa-calendar-days"><p>4 days hike</p></i>
                <i class="fa-solid fa-people-group"><p>10 people</p></i>
              </span>
              <span>
                <i class="fa-solid fa-house"><p>sleep in tents</p></i>
                <i class="fa-solid fa-turn-up"><p>Easy Hike</p></i>
              </span>
            </div>
            <button>Read More →</button>
          </div>

          <div>
            <img src={img2} alt="" />
            <h1>Meemure Hike</h1>
            <div className="icon">
              <span>
                <i class="fa-solid fa-calendar-days"><p>3 days hike</p></i>
                <i class="fa-solid fa-people-group"><p>15 people</p></i>
              </span>
              <span>
                <i class="fa-solid fa-house"><p>sleep in tents</p></i>
                <i class="fa-solid fa-turn-up"><p>Easy Hike</p></i>
              </span>
            </div>
            <button>Read More →</button>
          </div>

          <div>
            <img src={img3} alt="" />
            <h1>Hanthana Hike</h1>
            <div className="icon">
              <span>
                <i class="fa-solid fa-calendar-days"><p>2 days hike</p></i>
                <i class="fa-solid fa-people-group"><p>10 people</p></i>
              </span>
              <span>
                <i class="fa-solid fa-house"><p>sleep in tents</p></i>
                <i class="fa-solid fa-turn-up"><p>Easy Hike</p></i>
              </span>
            </div>
            <button>Read More →</button>
          </div>
        </div>

        <div className="box">
          <div>
            <img src={img4} alt="" />
            <h1>Ohiya Hike</h1>
            <div className="icon">
              <span>
                <i class="fa-solid fa-calendar-days"><p>4 days hike</p></i>
                <i class="fa-solid fa-people-group"><p>10 people</p></i>
              </span>
              <span>
                <i class="fa-solid fa-house"><p>sleep in tents</p></i>
                <i class="fa-solid fa-turn-up"><p>Easy Hike</p></i>
              </span>
            </div>
            <button>Read More →</button>
          </div>

          <div>
            <img src={img5} alt="" />
            <h1>Horton plains Hike</h1>
            <div className="icon">
              <span>
                <i class="fa-solid fa-calendar-days"><p>3 days hike</p></i>
                <i class="fa-solid fa-people-group"><p>15 people</p></i>
              </span>
              <span>
                <i class="fa-solid fa-house"><p>sleep in tents</p></i>
                <i class="fa-solid fa-turn-up"><p>Easy Hike</p></i>
              </span>
            </div>
            <button>Read More →</button>
          </div>

          <div>
            <img src={img6} alt="" />
            <h1>Yahangala Hike</h1>
            <div className="icon">
              <span>
                <i class="fa-solid fa-calendar-days"><p>2 days hike</p></i>
                <i class="fa-solid fa-people-group"><p>10 people</p></i>
              </span>
              <span>
                <i class="fa-solid fa-house"><p>sleep in tents</p></i>
                <i class="fa-solid fa-turn-up"><p>Easy Hike</p></i>
              </span>
            </div>
            <button>Read More →</button>
          </div>
        </div>
      </div>

      <button id='Hik_button'>All Hikes →</button>
    </div>
  )
}

export default Hikes