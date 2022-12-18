exports.getDate = function getDate() {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return new Date().toLocaleDateString("en-US", options);
};

exports.getOnlyWeekday = function getOnlyWeekday() {
  const options = {
    weekday: "long",
  };
  return new Date().toLocaleDateString("en-US", options);
};
