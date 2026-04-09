import React, { useState } from "react";

const Model = () => {
  const [ismodel, setIsmodel] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsmodel(!ismodel)}>click me</button>
        {ismodel && (
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nam
            corporis quae autem quaerat vitae et aliquid placeat, ex ad, sequi
            suscipit architecto dignissimos iusto ab, optio iste possimus quam!
          </div>
        )}
      </div>
    </>
  );
};

export default Model;
