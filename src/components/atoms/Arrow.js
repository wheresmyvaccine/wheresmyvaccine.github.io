import { h } from 'preact';

const Arrow = ({ color = 'white', direction = 'right' }) => {
  return (
    <svg
      className={`Arrow ${color} ${direction}`}
      width='48'
      height='11'
      viewBox='0 0 48 11'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect className='line' y='4' width='39' height='3' fill='currentColor' />
      <path className='triangle' d='M48 5.5L38.25 10.2631L38.25 0.73686L48 5.5Z' fill='currentColor' />
    </svg>
  );
};

export default Arrow;
