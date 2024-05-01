import { FC } from 'react'
import styles from './TopMoviesSlider.module.scss'
import Slider from 'react-slick';
import TopMoviesSliderCard from './top-movies-slider-card/TopMoviesSliderCard';

const TopMoviesSlider: FC = () => {

	var settings = {
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
	};

	return (
		<section className={styles.sliderWrapper}>
							{/* <TopMoviesSliderCard/> */}
			<Slider {...settings}>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
			</Slider>
		</section>
	)
}

export default TopMoviesSlider