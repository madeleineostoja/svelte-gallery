import styles from './masonry.less';

const classNames = Object.keys(styles).reduce((obj, key) => {
  const camelCaseKey = key.replace(/-([a-z])/g,  g => g[1].toUpperCase());
  obj[camelCaseKey] = styles[key];
  return obj
}, {});

export default classNames;
