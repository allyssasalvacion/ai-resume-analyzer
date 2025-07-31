import { usePuterStore } from 'lib/puter';

const SignOut = () => {
  const { auth } = usePuterStore();
  return (
    <button
      className='fixed top-0 left-0 m-4 cursor-pointer hover:opacity-50'
      onClick={auth.signOut}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='white'
        className='w-10 h-10 rotate-[-45deg]'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M12 19V5m0 0l7 7m-7-7l-7 7'
        />
      </svg>
    </button>
  );
};

export default SignOut;
