import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src="https://th.bing.com/th/id/R.3754408f24d86dbac0d24a404540c155?rik=lghnbT9MLjhaDw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f3%2f2%2f4%2f15081.jpg&ehk=Bw5ZE%2f3Vt0deUoQ0mpnxRBj9nUwDzN%2bo53JK%2bczwBkA%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
