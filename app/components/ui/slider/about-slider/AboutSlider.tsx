import { FC } from 'react'
import styles from './aboutSlider.module.scss'
import Image from 'next/image'
import Slider from 'react-slick'


const AboutSlider: FC = () => {

	var settings = {
		dots: false,
		arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		adaptiveHeight: true,

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
	 <div className={styles.aboutSlider}>
			<Slider {...settings}>

				<div className={styles.card}>
					<Image 
						src="/images/avatar.jpg"
						width={960}
						height={594}
						alt='avatar' 
					/>
				</div>
				<div className={styles.card}>
					<Image 
						src="/images/avatar.jpg"
						width={960}
						height={594}
						alt='avatar' 
					/>
				</div>
				<div className={styles.card}>
					<Image 
						src="/images/avatar.jpg"
						width={960}
						height={594}
						alt='avatar' 
					/>
				</div>
			</Slider>
	 </div>
	)
}

export default AboutSlider