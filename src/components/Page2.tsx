import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import '../styles/Page2.css';

const Page2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const delayTime = 2000;
    const animationTime = 3000;

    const timeoutId = setTimeout(() => {
      navigate('/page3');
    }, delayTime + animationTime);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="page2-container">
      <img src="/src/assets/page2.svg" alt="Page 2 SVG" className="page2-svg" />
    </div>
  );
};

export default Page2;
