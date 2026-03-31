import './Abaut.css'
import foto from '../../assets/Group 32.png'

const Abaut = () => {
  return (
    <div id='about'>
      <div>
        <h1>ABOUT US</h1>
        <h2>The Best travel Agency for Hikers</h2>
        <p>Amet minim mollit non deserunt ullamco est sit Aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamc on se qua t sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia. </p>
        <p>consequat duis enim velit mollit. Exe rcitation veniam consequat sunt nostrud amet
          Amet minim mollit non deserunt ullamco est sit aliqu.rcitation veniam consequat sunt nostrud ametvAmet minim mollit non deserunt ullamco est sit aliqu.</p>

        <button>Read More →</button>
      </div>
      <div>
        <img src={foto} alt="" />
      </div>
    </div>
  )
}

export default Abaut