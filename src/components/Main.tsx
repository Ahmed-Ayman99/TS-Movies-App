import { type FC, type PropsWithChildren } from "react";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
