import Hero from "@/components/LegalSolutions/Hero";
import AutomateIntake from "@/components/LegalSolutions/AutomateIntake";
import TheSolution from "@/components/LegalSolutions/TheSolution";
import Revnue from "@/components/LegalSolutions/Revnue";
import LegalSolutionsProblem from "@/components/LegalSolutions/Problem";

const legalSolutions = () => {
  return (
    <div>
      <Hero />
      {/* <Problem/> */}
      <LegalSolutionsProblem />
      <TheSolution />
      <Revnue />
      <AutomateIntake />
    </div>
  );
};

export default legalSolutions;
