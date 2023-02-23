import React from 'react'
import './About.css'
import Shoes from '../../assets/shoes.png'
import { useNavigate } from 'react-router-dom';

export const About = () => {

    const navigate = useNavigate();
  return (
    <div className="containerMax">
        <div className="container container-about">
            <div className="banner">
                <div className="banner-txt">
                    <h2>SHOP ONLINE EXCLUSIVES</h2>
                    <h1>Big <span>Shopping</span></h1>
                    <button onClick={() => navigate("/")}>Shop Now</button>
                </div>
                <div className="banner-img">
                    <img src={Shoes} alt="" />
                </div>
            </div>
            <div className="txt-about">
                <h1>Big Shopping</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam recusandae vero facilis earum enim animi quos quam, laborum nihil ipsa veniam voluptatem iste est molestias nam, quas beatae dignissimos pariatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore ducimus ipsam quisquam architecto sequi, eaque quasi neque fugit, quidem repudiandae voluptatum deleniti quo deserunt dolore laudantium a excepturi nisi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias provident perferendis saepe fuga dolore voluptatibus, quisquam quas explicabo facilis beatae molestias eius esse, voluptatem maxime quibusdam dignissimos tempore rem dolorem.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque minima magnam ipsa optio dolores illum! Minima similique, hic quibusdam quae officia facere consequatur ipsa. Architecto officiis quidem deleniti numquam. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum nesciunt optio debitis, non tempora, eos doloribus, quo fugiat eum expedita! Assumenda sit, enim sed qui doloremque velit tempore minima.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam reiciendis obcaecati optio perferendis rem, accusamus quidem culpa ut asperiores, praesentium vel doloremque vero nobis? Dicta, tenetur. Aliquid, aliquam at.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit vero enim reiciendis quasi molestias nesciunt sapiente asperiores porro suscipit? Distinctio explicabo maxime repudiandae praesentium deleniti unde, autem itaque aliquid veritatis.
                </p>
            </div>
        </div>
        
    </div>
  )
}
