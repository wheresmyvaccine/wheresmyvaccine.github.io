import { h } from 'preact';

const Column = ({ className: _class = '', offset, size, children }) => {
  const sizeClass = size ? `column-${size}` : '';
  const offsetClass = offset ? `column-offset-${offset}` : '';
  return <div className={`column ${_class} ${sizeClass} ${offsetClass}`.trim()}>{children}</div>;
};

export default Column;
