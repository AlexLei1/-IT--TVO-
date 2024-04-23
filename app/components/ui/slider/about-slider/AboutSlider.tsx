import { FC } from 'react'
import styles from './aboutSlider.module.scss'
import Image from 'next/image'
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
		adaptiveHeight: false,
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
	 	<section className={styles.section}>
				{/* <AboutSliderCard/> */}
			<Slider {...settings}>
				<AboutSliderCard/>
				<AboutSliderCard/>
			</Slider>
		</section>
	)
}

export default AboutSlider