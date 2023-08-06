import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Intake } from '@/types/intake'
import dayjs from 'dayjs'

type IntakeRecordProps = {
  data: Intake[]
}

const showDateWithDayAndMinutes = (date: Date) => {
  return dayjs(date).format('HH:mm:ss')
}

const showElapsedTime = (startDate: Date, endDate: Date) => {
  const start = dayjs(startDate)
  const end = dayjs(endDate)
  // Get minutes and seconds of duration
  const elapsedMinutes = start.diff(end, 'minutes')
  return `${elapsedMinutes}`
}

export default function IntakeRecord({ data }: IntakeRecordProps) {
  if (data.length === 0) return null

  return (
    <div><Table>
      <TableCaption>Registro de tiempos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Inicio</TableHead>
          <TableHead>Fin</TableHead>
          <TableHead>Duracion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{showDateWithDayAndMinutes(item.start)}</TableCell>
                <TableCell>{showDateWithDayAndMinutes(item.end)}</TableCell>
                <TableCell>{showElapsedTime(item.end, item.start)}</TableCell>
              </TableRow>
            )
          }
          )
        }
      </TableBody>
    </Table></div>
  )
}
