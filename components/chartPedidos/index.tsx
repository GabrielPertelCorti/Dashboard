"use client"

import { Package } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {ChartContainer, ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Bar, XAxis, BarChart } from "recharts";

function ChartPedidos({dados}: any){

  const chartData = dados.map((item: any) => ({
    mes: item.mes,
    pedidos: item.pedidos,
    pedidosCancelados: item.cancelados,
  }))

  const chartConfig = {
    pedidos: {
      label: "Pedidos",
      color: "#45d6f0",
    },
    pedidosCancelados: {
      label: "Cancelados",
      color: "#147c8f",
    },
  } satisfies ChartConfig

  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div>
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Pedidos/Pedidos Cancelados 
          </CardTitle>
          <Package className="ml-auto w-5 h-5" />
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid />
            <XAxis
              dataKey="mes"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="pedidos" fill="var(--color-pedidos)" radius={4} />
            <Bar dataKey="pedidosCancelados" fill="var(--color-pedidosCancelados)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ChartPedidos