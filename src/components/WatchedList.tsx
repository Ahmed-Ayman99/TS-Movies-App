import { type FC, type PropsWithChildren } from "react";

const WatchedList: FC<PropsWithChildren> = ({ children }) => {
  return <ul className="list watched-list">{children} </ul>;
};

export default WatchedList;
