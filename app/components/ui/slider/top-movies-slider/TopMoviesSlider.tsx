import { FC } from 'react'
import styles from './TopMoviesSlider.module.scss'
import Slider from 'react-slick';
import TopMoviesSliderCard from './top-movies-slider-card/TopMoviesSliderCard';

const TopMoviesSlider: FC = () => {

	var settings = {
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 2,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3.4,
				}
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3.2,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2.8,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2.6,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2.4,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2.2,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1.8,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1.6,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1.4,
				}
			},
		]
	};

	return (
		<div className={styles.container}>
			<Slider {...settings}>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
				<TopMoviesSliderCard/>
			</Slider>
		</div>
	)
}

export default TopMoviesSlider