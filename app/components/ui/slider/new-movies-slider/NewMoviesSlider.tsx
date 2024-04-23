import { FC } from 'react'
import styles from './newMoviesSlider.module.scss'
import Slider from 'react-slick'
import NewMoviesSliderCard from './new-movies-slider-card/NewMoviesSliderCard';

const NewMoviesSlider: FC = () => {
	var settings = {
		dots: false,
		arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1640,
				settings: {
					slidesToShow: 5,
				}
			}, 
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}
			}
		]
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