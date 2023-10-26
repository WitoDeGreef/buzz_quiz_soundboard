import Layout from '../components/layout';

// Styles
import '../styles/global.css';
 
export default function MyApp({ Component }) {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}