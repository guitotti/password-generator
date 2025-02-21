const standardPassword = () => {
  const characters =
    "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
  const length = 12;
  let password = "";
  for (let i = 0; i < length; i++) {
    const position = Math.floor(Math.random() * characters.length);
    password += characters[position];
  }
  return password;
};

export default standardPassword;
