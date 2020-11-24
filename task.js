import users from './users.js'

////////////////////////////TASK_1///////////////////////////////

const getUserNames = users => {
  return users.map(user => user.name)
};

console.log(getUserNames(users));

////////////////////////////TASK_2///////////////////////////////// 

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color)
};

console.log(getUsersWithEyeColor(users, 'blue'));

////////////////////////////TASK_3///////////////////////////////

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name)
};

console.log(getUsersWithGender(users, 'male'));

////////////////////////////TASK_4///////////////////////////////

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive)
};

console.log(getInactiveUsers(users));

////////////////////////////TASK_5///////////////////////////////

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email)
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

////////////////////////////TASK_6///////////////////////////////

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max)
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

////////////////////////////TASK_7///////////////////////////////

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0)
};

console.log(calculateTotalBalance(users));

////////////////////////////TASK_8///////////////////////////////

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName)).map(user => user.name)
};
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

////////////////////////////TASK_9///////////////////////////////

const getNamesSortedByFriendsCount = users => {
    return users.sort((a,b) => a.friends.length - b.friends.length).map(user => user.name)
};

console.log(getNamesSortedByFriendsCount(users));

////////////////////////////TASK_10///////////////////////////////

const getSortedUniqueSkills = users => {
    let skills = users.reduce((allSkills, user) => {
        allSkills.push(...user.skills);
        return allSkills 
    }, [])

    return skills.filter((skill, index) => skills.indexOf(skill) === index).sort();
};

console.log(getSortedUniqueSkills(users));