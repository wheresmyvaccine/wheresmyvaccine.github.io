import { h } from 'preact';
import Column from './Column';

const Row = ({ className: _class = '', center, children, single, vertical, onClick }) => {
  const className = `row ${vertical ? 'vertical' : ''} ${center ? 'center' : ''} ${_class}`.trim();
  if (single) {
    return (
      <div className={className} onClick={onClick}>
        <Column>{children}</Column>
      </div>
    );
  }
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Row;
