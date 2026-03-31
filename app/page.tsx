import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DollarSign, Users, Percent, BadgeDollarSign, ShoppingBasket, Zap, Ban, CreditCard  } from "lucide-react"

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Faturamento
              </CardTitle>
              <DollarSign className="ml-auto w-5 h-5 text-gray-800" />
            </div>

            <CardDescription>Faturamento dos últimos 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 34.529,90</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos
              </CardTitle>
              <ShoppingBasket className="ml-auto w-5 h-5 text-gray-800" />
            </div>

            <CardDescription>Total de pedidos dos últimos 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">811</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos Hoje
              </CardTitle>
              <Zap className="ml-auto w-5 h-5 text-gray-800" />
            </div>

            <CardDescription>Total de pedidos de hoje</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">34</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Ticket Médio
              </CardTitle>
              <CreditCard className="ml-auto w-5 h-5 text-gray-800" />
            </div>

            <CardDescription>Ticket médio dos últimos 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 42,68</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos Cancelados
              </CardTitle>
              <Ban className="ml-auto w-5 h-5 text-gray-800" />
            </div>

            <CardDescription>Total de Pedidos cancelados dos últimos 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">59</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Crescimento
              </CardTitle>
              <Percent className="ml-auto w-5 h-5 text-gray-800" />
            </div>

            <CardDescription>Crescimento nos últimos 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">13%</p>
          </CardContent>
        </Card>


      </section>
    </main>
  );
}
