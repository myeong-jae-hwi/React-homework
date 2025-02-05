function Footer({ price }: { price: number }) {
  return (
    <footer className="border-t border-gray-700 p-4 flex flex-row-reverse">
      <p className="font-bold">구매총액: {price}원</p>
    </footer>
  );
}

export default Footer;
