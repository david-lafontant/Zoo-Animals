import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import AnimalCSS from './animal.module.css';
import { toggleDetail } from '../../redux/zoo/zoo';

function Animal(props) {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(toggleDetail(id));
  };
  const {
    id,
    type,
    name,
    image,
  } = props;

  return (
    <Col id={id} sm={6} lg={6} className={AnimalCSS.animalWidth}>

      <Link to={`/AnimalDetail/${id}`}><button type="button" className={AnimalCSS.buttonRight} onClick={handleToggleClick}>D</button></Link>
      <ul className={AnimalCSS.listStyle}>
        <li>
          <Card.Img src={image} alt={name} style={{ width: '150px', maxHeight: '30vh' }} />
        </li>
        <li>
          Name :
          {name}
        </li>
        <li>
          Type :
          {type}
        </li>
      </ul>

    </Col>
  );
}

Animal.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};

export default Animal;
