type MainLayoutProps = {
  children: Readonly<React.ReactNode>;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <div>{children}</div>;
}
