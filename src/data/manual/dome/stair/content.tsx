import Text from '@/components/Text';
import Alert from '@/components/Alert';
import Picture from '@/components/Picture';

const Content: React.FC = () => {
  return (
    <div>
      <Text>
        はしごを階段側に動かすときは、階段の蓋を閉じる必要があります。
      </Text>
      <Text>階段を乗せるときは、このスロープを付けてください。</Text>
      <Picture pubId="IMG_3709_clpqom" caption="スロープを付けた様子" />
      <Alert type="caution">
        蓋を上げるときは必ず階段にフックを引っ掛けてください。
        <br />
        急に倒れてけがをする可能性があります。
      </Alert>
    </div>
  );
};

export default Content;
