import { Option } from './Option';

import classNames from './styles.module.scss';

export const Select = () => {
  return (
    <select name="select" id="select" className={classNames.select}>
      {Array(4)
        .fill({})
        .map((_, index) => (
          <Option value={index} />
        ))}
    </select>
  );
};
