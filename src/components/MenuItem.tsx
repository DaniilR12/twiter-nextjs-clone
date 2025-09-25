interface Props {
  nameItem: string;
  isActive: boolean;
}

export function MenuItem({ nameItem, isActive }: Props) {
  return <p className={isActive ? "text-white" : ""}>{nameItem}</p>;
}
