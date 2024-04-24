const HotelsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col items-center mt-10">
      {children}
    </div>
  );
};

export default HotelsLayout;
