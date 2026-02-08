import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import New from "./pages/New";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import Trending from "./pages/Trending";
import Deals from "./pages/Deals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/new" element={<New />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/auth" element={<Account />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/deals" element={<Deals />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
