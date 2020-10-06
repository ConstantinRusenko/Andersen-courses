function getInfo(user) {
  const info = {};
  return new Promise(function(resolve, reject) {
    resolve(user);

  }).then(function(result) {

    setTimeout(() => info.city = user.city, 1000);
    return result;

  }).then(function(result) {

    setTimeout(() => {
      info.role = user.role;
      info.email = `${user.role}.com`;
      info.group = user.group;
      if (info.role === 'admin') { 
        setTimeout(() => idCheck(user, info), 2000);
      }
      else {
        throw new Error('You are not admin!');
      }
    }, 4000);
    
  }).then(function(result) {

    setTimeout(() => {throw new Error('The end')}, 10000);
    return result;

  });
}

function idCheck(user, info) {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
    if (user.group === info.group) {
      return user;
    }
    else {throw new Error('Too much!');}    
    });
  }, 1000);
}


const user = {city:'Cherkassy', role:'admin', id: 3, group: 5};
getInfo(user);