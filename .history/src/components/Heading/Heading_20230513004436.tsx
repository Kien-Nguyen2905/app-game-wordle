import Button from "../button/Button";
import Guide from "../../modules/guide/Guide";
const Heading = () => {
  return (
    <div className="flex items-center justify-center w-full gap-10">
      <h1 className="text-[50px] font-bold ">Wordle</h1>
      <Button></Button>
      <Guide></Guide>
    </div>
  );
};

export default Heading;
