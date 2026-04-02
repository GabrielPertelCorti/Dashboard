import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Users } from "lucide-react"

function Sales({clientes}: any) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div>
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Últimos clientes
          </CardTitle>
          <Users className="ml-auto w-5 h-5" />
        </div>
        <CardDescription>Novos clientes nas últimas 24h</CardDescription>
      </CardHeader>
      <CardContent>
        {clientes.map((cliente: any) => (
          <article
            key={cliente.id}
            className="flex items-center gap-2 border-b py-2"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src={cliente.avatar} alt={cliente.nome} />
              <AvatarFallback>
                {cliente.nome.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="text-sm sm:text-base font-semibold">
                {cliente.nome}
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                {cliente.email}
              </span>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}

  export default Sales