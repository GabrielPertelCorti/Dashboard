"use client"

import { DollarSign } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {ChartContainer, ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Bar, XAxis, BarChart } from "recharts";

function ChartFaturamento({dados}: any){


  const chartData = dados.map((item: any) => ({
    mes: item.mes,
    faturamento: item.faturamento
  }))

  const chartConfig = {
    faturamento: {
      label: "Faturamento",
      color: "#45d6f0",
    },
  } satisfies ChartConfig

  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div>
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Faturamento
          </CardTitle>
          <DollarSign className="ml-auto w-5 h-5" />
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid/>
            <XAxis dataKey="mes" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="faturamento" fill="var(--color-faturamento)" radius={4}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ChartFaturamento