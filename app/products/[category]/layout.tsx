import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/*<div className=" bg-red-500 h-screen frlx flex-col w-[300px] ">*/}
      {/*  <Link className="block" href="/products/women's clothing">*/}
      {/*    Women's Clothing*/}
      {/*  </Link>*/}
      {/*  <Link className="block" href="/products/men's clothing">*/}
      {/*    Men's clothing*/}
      {/*  </Link>*/}
      {/*  <Link className="block" href="/products/jewelery">*/}
      {/*    Jewelery*/}
      {/*  </Link>*/}
      {/*  <Link className="block" href="/products/electronics">*/}
      {/*    Electronics*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {children}
    </div>
  );
};

export default Layout;
