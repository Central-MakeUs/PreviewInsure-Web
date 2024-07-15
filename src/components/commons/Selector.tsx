import { ReactComponent as Check } from '@/assets/icons/Selector.svg';
import type { SelectorProps } from '@/types/commonComponents';

function Selector({ check, setCheck }: SelectorProps) {
  const color = '#6879FB';
  return (
    <button
      className="SelectorContainer"
      style={{
        width: '45px',
        height: '45px',
        backgroundColor: `${check ? color : '#fff'}`,
        borderRadius: '50%',
        border: `1px solid ${color}`,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => setCheck(!check)}
    >
      {check && <Check width={30} height={27} fill={'#fff'} />}
    </button>
  );
}

export default Selector;
