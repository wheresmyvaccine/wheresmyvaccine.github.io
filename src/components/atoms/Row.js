import { h } from 'preact';
import Column from './Column';

const Row = ({ className: _class = '', center, children, single, vertical }) => {
  const className = `row ${vertical ? 'vertical' : ''} ${center ? 'center' : ''} ${_class}`.trim();
  if (single) {
    return (
      <div className={className}>
        <Column>{children}</Column>
      </div>
    );
  }
  return <div className={className}>{children}</div>;
};

export default Row;
