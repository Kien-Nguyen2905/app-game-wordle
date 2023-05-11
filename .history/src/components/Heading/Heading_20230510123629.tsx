import { Button } from "components/button";
const Heading = () => {
  return (
    <div className="container">
      <div className="flex items-center w-full gap-10 justify-center">
        <h1 className="text-[50px] font-bold ">Wordle</h1>
      </div>
      <Button></Button>
    </div>
  );
};

export default Heading;
