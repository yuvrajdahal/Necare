const CarosuelItem = ({ children, className = "" }) => {
  return (
    <div className={`inline-flex  ${className}`}>{children}</div>
  );
};
export default CarosuelItem;
