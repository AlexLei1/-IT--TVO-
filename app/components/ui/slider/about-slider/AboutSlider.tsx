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
    slidesToScroll: 1,
		adaptiveHeight: true,
		variableWidth: false,
		
  };

	return (
	 	<section className={styles.aboutSlider}>
			
			<Slider {...settings}>
				<AboutSliderCard/>
				<AboutSliderCard/>
			</Slider>
		</section>
	)
}

export default AboutSlider