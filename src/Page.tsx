import React, { Suspense } from "react";

const Button = React.lazy(() => import("./Button"));

const Page = () => {
  const hello = async () => {
    const { hiMom } = await import("./helpers");
    return hiMom;
  };
  hello();
  console.log("TCL: Page -> hello()", hello());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Button />
    </Suspense>
  );
};

export default Page;
