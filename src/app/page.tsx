import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/html/01-what-is-html');
  return null;
}
