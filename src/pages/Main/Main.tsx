import React from 'react';
import { useQuery } from 'react-query';

import getRates from 'api/rates.api';

function Main() {
  const { data, isLoading, isError } = useQuery('rates', () => getRates());

  console.log(6, data, isLoading, isError);

  return <h1>Main</h1>;
}

export default Main;
