'use client'
import React from "react"
import { useState, useRef } from "react"
import IntakeControls from "./IntakeControls"
import IntakeRecord from "./IntakeRecord"
import { Intake } from "@/types/intake"

function Intake() {
  const [data, setData] = useState<Intake[]>([])
  // Save last time with useRef
  const startTime = useRef<Date | null>(null)

  const handleStartIntake = () => {
    startTime.current = new Date()
  }

  const handlePauseIntake = () => {
    handleIntakePush()
  }

  const handleIntakePush = () => {
    console.log(startTime.current)
    const newRecord: Intake = {
      start: startTime.current as Date, // Will never be null here
      end: new Date(),
    }
    startTime.current = null
    // Push new Record to data
    setData([...data, newRecord])
  }

  return (
    <div className="w-full flex flex-col justify-center">
      <IntakeControls
        handleStartIntake={() => handleStartIntake()}
        handlePauseIntake={() => handlePauseIntake()}
      />
      <IntakeRecord data={data} />
    </div>
  )
}

export default Intake