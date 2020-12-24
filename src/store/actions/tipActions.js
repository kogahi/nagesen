export const execTip = (tip) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('users')
      .add({
        ...tip,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'EXEC_TIP', tip });
      })
      .catch((err) => {
        dispatch({ type: 'EXEC_TIP_ERROR', err });
      });
  };
};
