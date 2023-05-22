import Button from "../button/Button";
const Heading = () => {
  return (
    <div className="relative flex items-center justify-center w-full gap-10 z-60">
      <h1 className="text-[50px] font-bold ">Wordle</h1>
      <Button></Button>
    </div>
  );
};

export default Heading;
