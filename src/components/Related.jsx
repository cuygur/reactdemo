import React from 'react';


export default function Related({data}) {
  return (
    data.id
  );
};

Related.propTypes = {
  related: React.PropTypes.string.isRequired,
};