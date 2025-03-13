import { Metadata } from 'next';
import NotFoundComponent from './NotFoundComponent';

const metadata: Metadata = {
  title: 'ページが見つかりません(404) - 同志社高校地学部',
};
console.log(metadata);

export default function NotFound() {
  return (
    <div>
      <NotFoundComponent />
    </div>
  );
}
