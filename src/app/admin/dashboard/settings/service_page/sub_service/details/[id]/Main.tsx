import React from 'react';

const udpate = `query Subservices($where: SubserviceWhere) {
    subservices(where: $where) {
      id
      title
    }
  }`

const Main = () => {
  return (
    <div>

    </div>
  );
};

export default Main;