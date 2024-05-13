import { FC } from 'react'
import styles from './SeriesSlider.module.scss'
import Slider from 'react-slick'
import SeriesSliderCard from './series-slider-card/SeriesSliderCard'

const SeriesSlider: FC = () => {
	var settings = {
		dots: false,
		arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
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
					<SeriesSliderCard/>
					<SeriesSliderCard/>
					<SeriesSliderCard/>
					<SeriesSliderCard/>
					<SeriesSliderCard/>
			</Slider>
		</div>
	)
}

export default SeriesSlider