import SkillCard from "./SkillCard";
import brImage from "../images/br.png";

export default function Skills() {
  return (
    <>
      <section className="py-32  text-white container">
        <h1 className="text-2xl font-bold">Skills</h1>
        {/* <p className="font-light text-gray-400">Here are some of my skills</p> */}
        <div className="mt4">
          <SkillCard />
        </div>
      </section>

      <img
        src={brImage}
        className="object-contain mx-auto lg:h-24 sm:h-24 md:object-scale-down my-5"
        alt="hr"
      ></img>
    </>
  );
}
