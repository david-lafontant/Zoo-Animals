import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import elementStore from '../redux/configureStore';
import Animal from '../components/animal/animal';

// ARRANGE
const animal = [
  {
    key: 'animalKey',
    id: 'animalId',
    type: 'animalType',
    name: 'animalName',
    image: 'animalImage',
    latin_name: 'animalLatin',
    active_time: 'animalActive',
    length_min: 'animalMin',
    length_max: 'animalMax',
    weight_min: 'animalWeightMin',
    weight_max: 'animalWeightMax',
    lifespan: 'animalLifespan',
    habitat: 'animalHabitat',
    diet: 'animalDiet',
    geo_range: 'animalGeoRange',
    detail: false,
    item_detail: false,

  },
];

describe('Test render the Animal Component', () => {
  it('Animal section renders a hardcoded object, passed as a prop', () => {
    // ACT
    const { container } = render(
      <Provider store={elementStore}>
        <Animal key={animal[0].id} dragon={animal[0]} />
      </Provider>,
    );

    // ASSERT
    expect(container).toMatchSnapshot();
  });
});
