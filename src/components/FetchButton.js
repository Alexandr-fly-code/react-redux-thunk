import React from 'react';

import { useDispatch } from 'react-redux';

import { fetchData } from '../store/fetchButton/actions';

import { connect } from 'react-redux';

const FetchButton = ({ data }) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(fetchData());

  return (
    <div>
      <button type='button' onClick={onClick}>Fetch</button>
        <p>{JSON.stringify(data)}</p>
    </div>
  );
};

const MSTP = (store) =>  ({
  data: store.data
});

export default connect(MSTP)(FetchButton);