import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import {fetchStackData} from '../api/fetchStockData.js'
import Home from "@/components/home.jsx"
import FinancialSentimentDashboard from "./FinancialSentimentDashboard.jsx"
import { ChatInterface } from "@/components/ChatInterface.jsx"
import CarbonOffsetDApp from "./index.jsx"      
export default function Dashboard() {
  const pages ={
    '/dashboard':<Home/>,
    '/news':<FinancialSentimentDashboard/>,
    '/Ai': <ChatInterface/>,
    '/crypto':<CarbonOffsetDApp/>
  }
  const[select,setSelect] = useState('/dashboard');

  return (
    <SidebarProvider>
      <AppSidebar element={setSelect} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    PayMint
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>DashBoard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {pages[select]}
      </SidebarInset>
    </SidebarProvider>
  )
}
