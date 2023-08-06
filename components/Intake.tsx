'use client'
import React from "react"
import { useState, useRef } from "react"
import IntakeControls from "./IntakeControls"
import IntakeRecord from "./IntakeRecord"
import { Intake } from "@/types/intake"

function Intake() {
  const [data, setData] = useState<Intake[]>([])
  // Save last time with useRef
  const lastTime = useRef(new Date())

  const handleIntakePush = () => {
    const newRecord: Intake = {
      start: lastTime.current,
      end: new Date(),
    }
    lastTime.current = newRecord.end
    // Push new Record to data
    setData([...data, newRecord])
  }

  return (
    <div className="w-full flex flex-col justify-center">
      <IntakeControls triggerNewIntake={() => handleIntakePush()} />
      <IntakeRecord data={data} />
    </div>
  )
}

export default Intake