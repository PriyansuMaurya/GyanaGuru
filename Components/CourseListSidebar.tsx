import CourseListData from "../data/course_list.json";
import Image from "next/image";

const CourseListSidebar = () => (
  <div className="p-8 space-y-6 h-screen overflow-hidden">
    {/* Course list header with sort and filter function */}
    <CourseListHeader />
    {/* Search bar */}
    <SearchBar />
    {/* List of couses */}
    <div className="space-y-4 overflow-y-scroll h-full ">
      {CourseListData.courseList.map((courseDetail, index: any) => {
        return (
          <GlassCourseCard
            key={index}
            courseDetail={courseDetail}
            onClick={() => {}}
          />
        );
      })}
    </div>
  </div>
);

const GlassCourseCard = ({ courseDetail, onClick }: any) => {
  const {
    courseCategory,
    courseName,
    courseDescription,
    courseImage,
    youtubeThumbnail,
    rating,
    numberOfPersonRated,
  } = courseDetail;

  return (
    <div
      className={`relative w-full h-72 items-end rounded-3xl overflow-hidden bg-cover bg-zinc-200`}
    >
      <div>
        <Image
          layout="fill"
          className="object-cover "
          src={youtubeThumbnail}
          alt="courseImage"
        />
      </div>
      <div className="absolute bottom-0  w-full">
        <div className="flex flex-row items-center p-4 w-full bg-black/30 backdrop-blur-md justify-between">
          <div className=" space-y-2 text-white w-10/12">
            <div className="flex flex-col w-full space-y-2">
              <h2 className="truncate overflow-hidden text-xl font-semibold font-archivo ">
                {courseName}
              </h2>
            </div>

            <div className="flex items-center space-x-4 ">
              <div className="flex flex-row">
                <span className="material-icons text-yellow-400">star</span>
                <div className="flex items-center ">
                  <span>{rating}</span>
                  <span className="material-icons">·</span>
                  <span>{numberOfPersonRated}</span>
                  <span>&nbsp; ratings</span>
                </div>
              </div>

              <h6 className="text-white/80">{courseCategory}</h6>
            </div>
          </div>
          <div className="text-white p-4 px-2 hover:bg-white/30 transition rounded-full h-fit w-fit">
            <span className="material-icons w-fit h-fit">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseListCard = ({ courseDetail, onClick }: any) => {
  const {
    courseCategory,
    courseName,
    courseDescription,
    courseImage,
    youtubeThumbnail,
    rating,
    numberOfPersonRated,
  } = courseDetail;
  return (
    <div className="grid grid-cols-8 rounded-2xl bg-zinc-50 ">
      <div className="relative rounded-2xl overflow-hidden col-span-4 p-2 w-full ">
        <div className="relative rounded-2xl overflow-hidden  p-2 w-full h-full  ">
          <Image
            layout="fill"
            className="object-cover "
            src={youtubeThumbnail}
            alt="courseImage"
          />
        </div>
      </div>
      <div className="col-span-4 space-y-6 p-4">
        <div className="flex flex-col  space-y-2">
          <h6 className="text-zinc-500">{courseCategory}</h6>
          <h2 className="truncate  text-xl font-semibold font-archivo ">
            {courseName}
          </h2>
        </div>

        <div className="flex items-center space-x-4 ">
          <span className="material-icons text-yellow-500">star</span>
          <div className="flex items-center ">
            <span>{rating}</span>
            <span className="material-icons">·</span>
            <span>{numberOfPersonRated}</span>
            <span>&nbsp; ratings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseListHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="text-3xl font-semibold font-archivo ">Courses List</h2>
      <div className="flex  space-x-4">
        <div className="flex flex-row space-x-4 w-fit p-2 rounded-lg hover:bg-zinc-100 border border-zinc-400">
          <span className="material-icons">filter_list</span>
          <h4>Sort</h4>
        </div>
        <div className="flex flex-row space-x-4 w-fit p-2 rounded-lg hover:bg-zinc-100 border border-zinc-400">
          <span className="material-icons">tune</span>
          <h4>Filter</h4>
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex flex-row items-center p-2 font-archivo overflow-hidden w-full rounded-xl border border-zinc-400">
      <span className="material-icons cursor-pointer">search</span>
      <input
        type="text"
        placeholder="Search"
        className=" w-full p-2 outline-none border-0 "
      />
    </div>
  );
};

export default CourseListSidebar;