import Hero from '@/components/LegalSolutions/Hero'
import AutomateIntake from '@/components/LegalSolutions/AutomateIntake'
import TheSolution from '@/components/LegalSolutions/TheSolution'
import Revnue from '@/components/LegalSolutions/Revnue'
import Problem from '@/components/LegalSolutions/TheProblem'

const legalSolutions = () => {
  return (
    <div>
        <Hero/>
        <Problem/>
        <TheSolution/>
        <Revnue/>
        <AutomateIntake/>
    </div>
  )
}

export default legalSolutions