const Heading = ({ children }) => (
  <h2 className="text-4xl font-bold text-primary font-sans relative w-fit mx-auto group">
    {children}
    <span className="block h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1" />
  </h2>
);

export default Heading;
