export const findMatchingUsers = (users, query) => {
  const queryRE = new RegExp(query);
  const matches = Object.values(users).filter( user =>
    queryRE.test(user.username) || queryRE.test(user.email)
  );
  return matches;
};
