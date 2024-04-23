import { FC } from 'react'
import styles from './aboutSlider.module.scss'
import Slider from 'react-slick'
import AboutSliderCard from './about-sider-card/AboutSliderCard';



const AboutSlider: FC = () => {
	var settings = {
		dots: false,
		arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		adaptiveHeight: true,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					dots: true,
				}
			}
		]
  };

	return (
	 	<>
			<Slider {...settings}>
				<AboutSliderCard/>
				<AboutSliderCard/>
			</Slider>
		</>
	)
}

export default AboutSlider