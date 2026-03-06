interface Props {
  nameItem: string;
  isActive: boolean;
}

export function MenuItem({ nameItem, isActive }: Props) {
  return (
    <p className={`text-xl font-semibold transition-all duration-200 ${
      isActive 
        ? "text-[var(--foreground)] font-bold" 
        : "text-[var(--secondary)] hover:text-[var(--foreground)]"
    }`}>
      {nameItem}
    </p>
  );
}
