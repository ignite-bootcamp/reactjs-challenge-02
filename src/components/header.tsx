import { CartButton } from './cart-button';
import { Location } from './location';

export function Header() {
  return (
    <header className='flex justify-between items-center'>
      <h1 className='text-lg py-9'>Coffee Time</h1>

      <div className='flex items-center gap-3'>
        <Location />
        <CartButton />
      </div>
    </header>
  );
}
