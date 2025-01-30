import { useState, useId } from 'react';
import './SignupCheck.css';

function SignupCheck() {
  const data = [
    {
      required: true,
      message: '만 18세 이상입니다.',
    },
    {
      required: true,
      message: '쿠팡 이용약관 동의',
    },
    {
      required: true,
      message: '전자 금융거래 이용약관 동의',
    },
    {
      required: true,
      message: '개인정보 수집 및 이용 동의',
    },
    {
      required: true,
      message: '개인정보 제3자 제공동의',
    },
    {
      required: false,
      message: '마케팅 정보 목적의 개인정보 수신 및 이용 동의',
    },
  ];

  const [checkItem, setCheckItem] = useState<string[]>([]);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    console.log('name: ', name, 'checked: ', checked);

    setCheckItem((prev) => {
      console.log(prev);
      if (checked) {
        console.log('1');
        return [...prev, name];
      } else {
        return prev.filter((item) => item !== name);
      }
    });
  };

  const handleAllCheck = () => {
    if (checkItem.length === data.length) {
      setCheckItem([]);
      return;
    }
    setCheckItem(data.map((item) => item.message));
  };

  return (
    <div className="signup-check">
      <input
        type="checkbox"
        id="all"
        onChange={handleAllCheck}
        className="check"
      />
      <label htmlFor="all">
        <strong>모두 확인하였으며 동의합니다.</strong>
      </label>
      <p className="desc">
        전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며,
        개별적으로 동의를 선택하실 수 있습니다. 선택항목에 대한 동의를
        거부하시는 경우에도 서비스 이용이 가능합니다.
      </p>
      <article className="check-list">
        {data.map((item, idx) => {
          const id = useId();

          return (
            <div key={idx}>
              <input
                className="check"
                type="checkbox"
                name={item.message}
                onChange={handleCheck}
                id={id}
                checked={checkItem.includes(item.message)}
              />
              <label htmlFor={id}>{item.message}</label>
            </div>
          );
        })}
      </article>
    </div>
  );
}

export default SignupCheck;
