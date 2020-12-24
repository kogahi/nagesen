const initState = {
  users: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' },
  ],
};
const tipReducer = (state = initState, action) => {
  switch (action.type) {
    case 'EXEC_TIP':
      console.log('exec tip', action.tip);
      return state;
    case 'EXEC_TIP_ERROR':
      console.log('error', action.err);
      return state;
    default:
      return state;
  }
};

export default tipReducer;
