const debounce = (func: (args?: any) => void, wait: number) => {
  let timeout: NodeJS.Timeout | null;
  return function executedFunction(...args: any[]) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
};

export default debounce;
