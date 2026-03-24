const SplitUnderline = ({ active }) => {
  return (
    <span
      className={`
        absolute left-1/2 -translate-x-1/2 bottom-0
        h-0.5
        transition-all duration-300
        ${active ? 'w-3/5 group-hover/navbar:w-0' : 'w-0 group-hover:w-3/5'}
      `}
    >
      <span className="absolute left-0 w-1/2 h-full bg-[var(--orange-test)]"></span>
      <span className="absolute right-0 w-1/2 h-full bg-[var(--primary)]"></span>
    </span>
  );
};

export default SplitUnderline;
