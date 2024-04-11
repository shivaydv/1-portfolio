import CategoryTabs from "@/components/CategoryTabs";

import SectionHeading from "@/components/SectionHeading";

const page = () => {
  return (
    <div className=" text-center ">
      <SectionHeading heading={"All Projects"} className="lg:mb-2 border-0" />
      <CategoryTabs />
    </div>
  );
};

export default page;
