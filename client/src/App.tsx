import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import HumanNutrition from "@/pages/HumanNutrition";
import AnimalNutrition from "@/pages/AnimalNutrition";
import ConsumerProducts from "@/pages/ConsumerProducts";
import Contact from "@/pages/Contact";

import PoultryNutrition from "@/pages/PoultryNutrition";
import LivestockNutrition from "@/pages/LivestockNutrition";
import AquacultureNutrition from "@/pages/AquacultureNutrition";

import UltimateBundle from "@/pages/consumer-products/ultimate";
import EssentialsKit from "@/pages/consumer-products/essentials";
import BubbzSolutions from "@/pages/consumer-products/bubbz";
import FomyHygiene from "@/pages/consumer-products/fomy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/human-nutrition" component={HumanNutrition} />
      <Route path="/animal-nutrition" component={AnimalNutrition} />
      <Route path="/animal-nutrition/poultry" component={PoultryNutrition} />
      <Route path="/animal-nutrition/livestock" component={LivestockNutrition} />
      <Route path="/animal-nutrition/aquaculture" component={AquacultureNutrition} />
      <Route path="/consumer-products" component={ConsumerProducts} />
      <Route path="/consumer-products/ultimate" component={UltimateBundle} />
      <Route path="/consumer-products/essentials" component={EssentialsKit} />
      <Route path="/consumer-products/bubbz" component={BubbzSolutions} />
      <Route path="/consumer-products/fomy" component={FomyHygiene} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
