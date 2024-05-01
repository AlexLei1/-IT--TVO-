import { FC } from 'react'
import styles from './newMoviesSlider.module.scss'
import Slider from 'react-slick'
import NewMoviesSliderCard from './new-movies-slider-card/NewMoviesSliderCard';

const NewMoviesSlider: FC = () => {
	var settings = {
		dots: false,
		arrows: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1639,
				settings: {
					slidesToShow: 5,
				}
			}, 
			{
				breakpoint: 1299,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 959,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 599,
				settings: {
					slidesToShow: 2,
				}
			}
		]
  };

	return (
		<section className={styles.sliderWrapper}>
			<Slider {...settings}>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
				<NewMoviesSliderCard/>
			</Slider>
		</section>
	)
}

export default NewMoviesSlider