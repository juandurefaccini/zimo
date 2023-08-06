'use client'

import React, { useState, useRef } from 'react'
import { Button } from './ui/button'
import { Play } from 'lucide-react';
import { Plus } from 'lucide-react'
import { Ban } from 'lucide-react'

export default function IntakeControls({ triggerNewIntake }: any) {
    const [isIntakeStarted, setIsIntakeStarted] = useState(false) // Shows or not the intake record

    if (isIntakeStarted) {
        return (
            <div className='flex-col flex gap-5'>
                <h3 className='text-2xl font-semibold tracking-tight text-center'>Ingesta iniciada</h3>
                <div className='flex w-full justify-around'>
                    <Button
                        onClick={() => {
                            triggerNewIntake()
                        }}
                    ><Plus /></Button>
                    <Button disabled><Ban /></Button>
                </div>
            </div >
        )
    }

    return (
        <Button
            onClick={() => {
                setIsIntakeStarted(true)
                triggerNewIntake()
            }}
        ><Play /></Button>
    )
}
