import {h} from 'preact';
import Column from './Column';

const Row = ({className: _class = '', children, single, vertical}) => {
  const className = `row ${vertical ? 'vertical' : ''} ${_class}`.trim();
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
