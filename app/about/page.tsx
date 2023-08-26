import Skeleton from "@mui/material/Skeleton";

const AboutPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {arr.map((item) => (
          <div key={item}>
            <div className="card__image">
              <Skeleton
                variant="rounded"
                height={150}
                className="w-full"
                classes="dark:bg-gray-800"
              />
            </div>
            <div>
              <Skeleton variant="text" height={40} />
              <Skeleton
                variant="text"
                width={40}
                height={30}
                classes="dark:bg-gray-800"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
