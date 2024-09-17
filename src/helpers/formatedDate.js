const formatedDate = ({ day = 0, month = 0, year = 0 }) => {
  const today = new Date();
  const nextBatchDate = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    day,
    month,
    year
  );
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = nextBatchDate.toLocaleDateString("en-US", options);
  return formattedDate;
};

export default formatedDate;
