import { Link } from 'react-router-dom';

const homeScreen = () => {
  return (
    <div>
      <h1>home</h1>
      <p>this is fake home page. haha</p>

      <Link to="/test1">test1</Link>
      <br />
      <Link to="/test2">test2</Link>
    </div>
  );
};

export default homeScreen;
