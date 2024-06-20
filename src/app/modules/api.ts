export const fetchUser = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ name: '솔솔' }), 2000);
  });
