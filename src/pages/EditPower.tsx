import { useParams } from 'react-router-dom';
import { usePowerAPI } from '../hooks/useAPI';

const EditPower = () => {

  const { powerId } = useParams();

  return (
    <>
      <h1>Edit Power: {powerId}</h1>
    </>
  );
};

export default EditPower;