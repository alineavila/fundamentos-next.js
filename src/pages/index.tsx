import Linha from "@/components/layout/Linha";
import Menu from "@/components/template/Menu";
import MenuItem from "@/components/template/MenuItem";
import Pagina from "@/components/template/Pagina";
import { Icon24Hours, IconArrowMoveDown, IconArrowMoveUp, IconArrowsDiff, IconClick, IconClock, IconComponents, IconSitemap, IconSourceCode, IconTable } from "@tabler/icons-react";

/*
Nota que eu não to passando o className numa div ou numa tag html puro
como faziamos, eu passo agora como atributo do component
 */
export default function Home() {
  return (
    <Pagina>
      
      <Menu>
        <Linha>
          <MenuItem url={"/hora.html"} icone={<IconSourceCode/>} className="bg-gradient-to-r from-red-500 to-yellow-500" >
            Hora (Estático)
          </MenuItem> 
          <MenuItem url={"/horaAtual.html"} icone={<IconSourceCode/>} className="bg-gradient-to-r from-red-500 to-yellow-500">
            Hora com JS(Estático)
          </MenuItem> 
          <MenuItem url={"/api/hora"} icone={<IconClock/>} className="bg-gradient-to-r from-red-500 to-yellow-500">
            Hora (Dinâmico)
          </MenuItem> 
          <MenuItem url={"/api/tabela?colunas=6&linhas=4"} icone={<IconTable/>} className="bg-gradient-to-r from-red-500 to-yellow-500">
            Tabela (Dinâmico)
          </MenuItem> 
          <MenuItem url={"/api/usuarios"} icone={<IconArrowsDiff/>} className="bg-gradient-to-r from-red-500 to-yellow-500">
            API de Usuários
          </MenuItem> 
        </Linha>
        <Linha>
        <MenuItem url={"/examples/simples"} icone={<IconComponents/>} className="bg-gradient-to-r from-cyan-500 to-red-500">
            Componente Simples
        </MenuItem>
        <MenuItem url={"/examples/basico"} icone={<IconComponents/>} className="bg-gradient-to-r from-cyan-500 to-red-500">
            Componente Básico
        </MenuItem>
        <MenuItem url={"/examples/evento"} icone={<IconClick/>} className="bg-gradient-to-r from-cyan-500 to-red-500">
            Eventos
        </MenuItem>
        <MenuItem url={"/examples/filhos"} icone={<IconSitemap/>} className="bg-gradient-to-r from-cyan-500 to-red-500">
            Filhos
        </MenuItem>
        <MenuItem url={"/examples/direta"} icone={<IconArrowMoveDown/>} className="bg-gradient-to-r from-cyan-500 to-red-500">
            Comunicação Direta
        </MenuItem>
        <MenuItem url={"/examples/indireta"} icone={<IconArrowMoveUp/>} className="bg-gradient-to-r from-cyan-500 to-red-500">
            Comunicação Indireta
        </MenuItem>

        </Linha>
      </Menu>
    </Pagina>
  )
  // O texto dentro da tag MenuItem é o children que foi personalizado dentro do component MenuItem
}
