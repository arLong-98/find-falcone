'use client';

const ListItem: React.FC<ListItemProps> = ({ label, id, onClick }) => {
  function handleClick() {
    onClick(label, id);
  }

  return (
    <li onClick={handleClick} key={id}>
      {label}
    </li>
  );
};

export interface ListItemProps {
  label: string;
  id: string | number;
  onClick: (label: string, id: string | number) => void;
}

export default ListItem;
