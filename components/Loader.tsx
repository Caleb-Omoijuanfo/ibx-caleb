import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CustomHorizontalPageLoader = () => {
  return (
    <div className={`container overflow-hidden p-0 `}>
      {[1, 2, 3, 4].map((item, index) => (
        <div key={index} className="row gx-2 mb-3">
          <div className="col-5">
            <Skeleton height={100} />
          </div>
          <div className="col-7">
            <Skeleton height={100} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const CustomVerticalPageLoader = () => {
  return (
    <div className={`container overflow-hidden p-0 `}>
      {[1, 2, 3, 4].map((item, index) => (
        <div key={index} className="row gx-2 mb-3">
          <div className="col-5">
            <Skeleton height={100} />
          </div>
          <div className="col-7">
            <Skeleton height={100} />
          </div>
        </div>
      ))}
    </div>
  );
};
