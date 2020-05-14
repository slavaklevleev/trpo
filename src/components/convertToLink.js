const convertToLink = (text) => {
  var regexp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;
  return text
    .replace(regexp, "<a href='https://$&'>https://$&</a>")
    .split("\n")
    .join("<br/>");
};

export default convertToLink;