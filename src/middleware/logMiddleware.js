const logMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log('Je laisse passer cette action: ', action);

  // je laisse passer tout de suite au middleware/reducer suivant
  next(action);
};

export default logMiddleware;
