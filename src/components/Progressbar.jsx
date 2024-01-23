import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample() {
  const first = 60;
  const second = 40;
  const third = 25;
  return <>
    <ProgressBar now={first} label={`${first}%`} className='text-white' />
    <ProgressBar now={second} label={`${second}%`} className='text-white' />
    <ProgressBar now={third} label={`${third}%`} className='text-white' />
  </>;
}

export default WithLabelExample;