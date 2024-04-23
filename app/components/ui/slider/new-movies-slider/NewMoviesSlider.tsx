import { FC } from 'react'
import styles from './newMoviesSlider.module.scss'
import Slider from 'react-slick'
import NewMoviesSliderCard from './new-movies-slider-card/NewMoviesSliderCard';

const NewMoviesSlider: FC = () => {
	var settings = {
		dots: false,
		arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
		adaptiveHeight: true,
  };

	return (
		<div className={styles.sliderWrapper}>
			{/* <NewMoviesSliderCard/> */}
			<Slider {...settings}>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
			</Slider>
		</div>
	)
}

export default NewMoviesSlider