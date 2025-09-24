import Text from './Text';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="my-4">
      <Text size="lg">{title}</Text>
      <div className="pt-2 pb-4">{children}</div>
      <hr />
    </div>
  );
}
