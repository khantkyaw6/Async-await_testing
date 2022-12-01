// synchronous & asynchronous

const login = () => {
  const loginStart = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Login Success...'), 5000);
  });
  return loginStart;
};

const verify = () => {
  const verifyPassword = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Password Correct'), 2000);
  });
  return verifyPassword;
};

const enter = () => {
  const enterHome = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Enter Home Page'), 3000);
  });
  return enterHome;
};

const accountLogin = async () => {
  const firstlogin = await login();
  console.log('FIrst Login Step:', firstlogin);
  const passwordEnter = await verify();
  console.log('Password Entered: ', passwordEnter);
  const enterHomePage = await enter();
  console.log('Enter Home Page Successfully: ', enterHomePage);
};

accountLogin().catch((err) => console.log('Error Occur in :', err));
