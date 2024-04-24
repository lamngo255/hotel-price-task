import { Toaster } from "sonner";

import { QueryProvider } from "@/components/providers/query-provider";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <Toaster />
      {children}
    </QueryProvider>
  );
};

export default LandingLayout;
