import Layout from '@/components/layout/Layout';
import '../app/assets/styles/index.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { AppProps } from "next/app";

 const App = ({ Component, pageProps }: AppProps) => {
  return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)

}
export default App
