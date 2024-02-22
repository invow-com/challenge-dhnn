export interface NavbarItemProps {
  title: string;
  handleClick: (item: string) => void;
  selectedItem?: string | null;
}
export interface CardProps {
  attributes: {
    title: string;
    image: string;
    description: string;
    category: PropsCategories;
  };
  id: number;
}

interface PropsCategories {
  title: string;
}

export interface PropsDataCards {
  data: CardProps[] | null;
  isLoading: boolean;
  error: string | null;
}

export interface PropsDataCategories {
  data: PropsCategories[] | null;
  isLoading: boolean;
  error: string | null;
}
