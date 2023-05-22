import Button from "../button/Button";
import Guide from "../../modules/guide/Guide";
import { useState } from "react";
const Heading = () => {
  const [showGuide, setShowGuide] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center w-full gap-10">
      <h1 className="text-[50px] font-bold ">Wordle</h1>
      <Button></Button>
      <Guide open={showGuide}></Guide>
    </div>
  );
};

export default Heading;
