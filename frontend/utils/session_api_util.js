
export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/users',
    data: {user: user},
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/session',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/session'
  });
};
