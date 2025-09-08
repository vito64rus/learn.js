// 1. Написание чистой функции
const cart = ['apple', 'banana'];
const item = 'orange';

const addToCart = (cart, item) => {
  return [...cart, item];
};

const newCart = addToCart(cart, item);

console.log (cart, newCart);

// 2. Проблема поверхностного копирования
const user = {
  name: 'Alice',
  profile: {
    settings: {
      theme: 'dark',
      notifications: true,
    }
  }
};

const userClone = structuredClone(user);

userClone.profile.settings.theme = 'light';

console.log(user.profile.settings.theme);

// 3. Возврат по ссылке
function getLogger() {
  const logs = [];  

  return {
    addLog(message) {
      logs.push(message);
    },

    // getLogs() {          В методе getLogs нужно возвращать копию массива, а не оригинал.
    //   return [logs];     Нарушается принцип инкапсуляции, возвращается прямая ссылка на внутренний массив logs.

    getLogs() {
      return [...logs];  // Возвращаем копию массива, чтобы внешний код не мог изменить оригинал.
    }
  };
}

const logger = getLogger();
logger.addLog('Session started');

const logsReference = logger.getLogs();
logsReference.push('User logged in');  // Изменится только копия.

console.log(logger.getLogs());  // Вывод: ['Session started'] - оригинал не изменился.

{ 
// 4. Чистая функция, изменяющая вложенный объект
const enableDarkTheme = (user) => {
  const clonedUser = structuredClone(user);
  clonedUser.profile.settings.theme = 'dark';
  return clonedUser;
};

// Альтернатива: через spread
// const enableDarkTheme = (user) => ({
//   ...user,
//   profile: {
//     ...user.profile,
//     settings: {
//       ...user.profile.settings,
//       theme: 'dark'
//     }
//   }
// });

const user = {
  name: 'Alice',
  profile: {
    settings: {
      theme: 'light', 
      notifications: true,
    }
  }
};

const updatedUser = enableDarkTheme(user);

console.log(updatedUser);
}