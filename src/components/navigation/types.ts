export type ClassNameProps = {
  isActive: boolean;
  isPending: boolean;
};

export type ClassNameFunc = (props: ClassNameProps) => string | undefined;
