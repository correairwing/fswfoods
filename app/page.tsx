import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/logo-banner.png"
          alt="Até 30% de descontos em pizzas"
          height={0}
          width={0}
          sizes="100vw"
          quality={100}
          className="h-auto w-full object-contain"
        />
      </div>
    </>
  );
};

export default Home;
