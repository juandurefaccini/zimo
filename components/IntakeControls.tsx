'use client'

import React, { useState, useRef } from 'react'
import { Button } from './ui/button'
import { Pause, Play } from 'lucide-react';
import { Plus } from 'lucide-react'
import { Ban } from 'lucide-react'

enum Status {
    NOT_STARTED = 'not-started',
    STARTED = 'started',
    PAUSED = 'paused',
    STOPPED = 'stopped'
}

type IntakeControlsProps = {
    handleStartIntake: () => void,
    handlePauseIntake: () => void,
}

export default function IntakeControls({ handleStartIntake, handlePauseIntake }: IntakeControlsProps) {
    const [intakeStatus, setIntakeStatus] = useState<Status>(Status.NOT_STARTED)

    const message =
        intakeStatus === Status.NOT_STARTED ? 'Iniciar Ingesta' :
            intakeStatus === Status.STARTED ? 'Ingesta iniciada' :
                intakeStatus === Status.PAUSED ? 'Ingesta pausada' :
                    intakeStatus === Status.STOPPED ? 'Ingesta detenida' : 'ERROR'

    const handleIntakeToggle = () => {
        if (intakeStatus === Status.NOT_STARTED || intakeStatus === Status.PAUSED) {
            handleStartIntake()
            setIntakeStatus(Status.STARTED)
        } else if (intakeStatus === Status.STARTED) {
            handlePauseIntake()
            setIntakeStatus(Status.PAUSED)
        }
    }

    const handleStopIntake = () => {
        setIntakeStatus(Status.STOPPED)
    }

    return (
        <div className='flex-col flex gap-5'>
            <h3 className='text-2xl font-semibold tracking-tight text-center'>{message}</h3>
            <div className='flex w-full gap-2'>
                <Button
                    className='w-full'
                    onClick={() => handleIntakeToggle()}
                >
                    {
                        intakeStatus === Status.NOT_STARTED || intakeStatus === Status.PAUSED ? <Play /> : <Pause />
                    }
                </Button>
                <Button
                    className='w-full'
                    onClick={() => handleStopIntake()}
                    disabled
                ><Ban /></Button>
            </div>
        </div >
    )
}
