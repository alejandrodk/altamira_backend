export const getFiltersFromString = filter => {
  const IS_MANY_FILTERS = filter?.includes(',');
  const IS_KEY_VALUE_FILTER = filter?.includes(':');

  return IS_MANY_FILTERS ? filter.split(',') : IS_KEY_VALUE_FILTER ? [filter] : filter;
};

export const normalizeFilters = filter => {
  return (
    filter.reduce((acc, curr) => {
      const [key, value] = curr.split(':');

      if (acc && !acc[key]) acc[key] = value.includes('-') ? value.split('-') : value;
      return acc;
    }, {}) || {}
  );
};

export const getArrayFromFilter = filter => {
  return Array.isArray(filter) ? filter : [filter];
};

export const calculateOffset = (page, limit) => {
  return page !== 0 ? limit * parseInt(page) : 0;
};
