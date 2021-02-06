import {h} from 'preact';

const Column = ({className: _class = '', size, children}) => {
  const sizeClass = size ? `column-${size}` : '';
  return <div className={`column ${_class} ${sizeClass}`.trim()}>{children}</div>;
};

export default Column;
